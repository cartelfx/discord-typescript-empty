import fs from "node:fs";
import { Client } from "base";
import path from "path"
export const ContextHandler = (client: Client) => {
  const readCommands = (dir: string) => {
    let files = fs.readdirSync(dir);
    files.forEach(async (file) => {
        let fullPath = path.resolve(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            readCommands(fullPath);
        } else if (file.endsWith(".ts")) {
            const cmd = (await import(fullPath)).default;
            client.slash.set(cmd.data.name, cmd);
        }
    });
};

readCommands(path.resolve(__dirname, "../context"));

console.log("Context Commands yüklendi.");

}