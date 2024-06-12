import { Client } from "base";
import fs from 'fs';
import path from 'path';
import { Command } from "@/models";

export const CommandHandler = async (client: Client) => {
    const readCommands = (dir: string) => {
        let files = fs.readdirSync(dir);
        files.forEach(async (file) => {
            let fullPath = path.resolve(dir, file);
            if (fs.statSync(fullPath).isDirectory()) {
                readCommands(fullPath);
            } else if (file.endsWith(".ts")) {
                const cmd: Command = (await import(fullPath)).default;

                client.commands.set(cmd.name, cmd);
                if (cmd.aliases && Array.isArray(cmd.aliases)) {
                    cmd.aliases.forEach(alias => client.aliases.set(alias, cmd.name));
                }
            }
        });
    };

    readCommands(path.resolve(__dirname, "../commands"));

    console.log("Prefix Commands yüklendi.");
};