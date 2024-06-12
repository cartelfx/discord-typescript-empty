import discord from "discord.js";
import { Client } from "base";

export default {
  data: new discord.SlashCommandBuilder()
    .setName("ping")
    .setDescription("It shows the bot latency."),
  execute(client: Client, interaction: discord.CommandInteraction) {
    interaction.editReply(
      `Pong! 🏓 -- Message: *${
        Date.now() - interaction.createdTimestamp
      }ms* | WebSocket: *${client.ws.ping}ms*`
    );
  },
};
