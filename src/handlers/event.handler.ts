import fs from "node:fs";
import { Client } from "base";
import { Event } from "@/models";
import path from "path"
export const EventHandler = (client: Client) => {
  const readEvents = (dir: string) => {
    let files = fs.readdirSync(dir);
    files.forEach(async (file) => {
        let fullPath = path.resolve(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            readEvents(fullPath);
        } else if (file.endsWith(".ts")) {
            const event: Event = (await import(fullPath)).default;
            if (event.once) client.once(event.name, event.execute.bind(null, client));
            else client.on(event.name, event.execute.bind(null, client));
        }
    });
};

readEvents(path.resolve(__dirname, "../events"));

console.log("Events yüklendi.");
}