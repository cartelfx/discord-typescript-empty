import { Event } from "@/models";
import { Command } from "@/models";
import { Message } from "discord.js";

export default new Event({
  name: "messageCreate",
  async execute(client, message: Message) {
      const prefix = client._system.prefixes.find(p => message.content.startsWith(p));
      if (!prefix || message.author.bot || !message.guild) return;

      const args = message.content.slice(prefix.length).trim().split(/ +/);
      const command: Command | undefined =
        client.commands.get(args[0]) ||
        client.commands.get(client.aliases.get(args[0])!);

      if (command) {
       command.execute(client, message, args);
      }
    }
  },
)