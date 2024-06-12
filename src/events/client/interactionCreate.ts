import { CommandInteraction } from "discord.js";
import { Event } from "@/models";

export default new Event({
  name: "interactionCreate",
  async execute(client, interaction: CommandInteraction) {
      const slash = client.slash.get(interaction.commandName);
      if (!slash) return;

      const çalıştır = async () => {
        await interaction.deferReply().catch(console.error);

          slash.execute(client, interaction);
      };

      if (interaction.isContextMenuCommand()) await çalıştır();
      if (interaction.isCommand()) await çalıştır();
    }
  },
)