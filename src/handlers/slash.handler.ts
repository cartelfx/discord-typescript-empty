import fs from "node:fs";
import { Client } from "base";
import path from "path"
export const SlashCommandHandler = (client: Client) => {
  const readEvents = (dir: string) => {
    let files = fs.readdirSync(dir);
    files.forEach(async (file) => {
        let fullPath = path.resolve(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            readEvents(fullPath);
        } else if (file.endsWith(".ts")) {
            const command = (await import(fullPath)).default;
            client.slash.set(command.data.name, command);
        }
    });
};

readEvents(path.resolve(__dirname, "../slashcommands"));

console.log("Slash komutlar yüklendi.");
};
