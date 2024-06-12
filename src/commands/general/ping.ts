import { Command } from "@/models";

export default new Command({
  name: "ping",
  description: "Pingi gösterir filan",
  aliases: ["p"],
  cooldown: 3,
  execute(client, message, args) {
    message.reply(
      `Pong! 🏓 -- Message: *${
        Date.now() - message.createdTimestamp
      }ms* | WebSocket: *${client.ws.ping}ms*`
    );
  },
});
