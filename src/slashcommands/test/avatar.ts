import { SlashCommandBuilder, CommandInteraction, User, EmbedBuilder } from "discord.js";
import { Client } from "base";

export default {
  data: new SlashCommandBuilder()
    .setName("avatar")
    .setDescription("It shows the profile picture of some member.")
    .addUserOption(opt =>
      opt
        .setName("member")
        .setDescription("Specify the member here.")
        .setRequired(true)
    ),
  async execute(client: Client, interaction: CommandInteraction) {
    try {
      const member = interaction.options.get("member")?.user as User;
      if (!member) {
        return interaction.reply({ content: "Member not found!", ephemeral: true });
      }

      const embed = new EmbedBuilder()
        .setTitle(`${member.username}'s Avatar`)
        .setImage(member.displayAvatarURL({ size: 2048, extension: "png" }))
        .setColor("Random")
        .setAuthor({
          name: interaction.user.tag,
          iconURL: interaction.user.displayAvatarURL({ size: 2048, extension: "png" }),
        });

      return interaction.reply({ embeds: [embed] });
    } catch (error) {
      console.error(error);
      if (!interaction.replied) {
        return interaction.reply({ content: "An error occurred while processing your request.", ephemeral: true });
      } else {
        return interaction.followUp({ content: "An error occurred while processing your request.", ephemeral: true });
      }
    }
  },
};