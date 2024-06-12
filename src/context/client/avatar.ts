import discord from "discord.js";
import { Client } from "base";

export default {
  data: new discord.ContextMenuCommandBuilder().setName("Avatar").setType(2),
  execute(client: Client, interaction: discord.ContextMenuCommandInteraction) {
    try {
      const member: discord.GuildMember | undefined =
        interaction.guild?.members.cache.get(interaction.targetId);
      const embed = new discord.EmbedBuilder()
        .setTitle(`${member?.user.username} kişisinin avatarı.`)
        .setImage(
          member?.user.displayAvatarURL({ size: 2048, extension: "png" }) ||
            null
        )
        .setColor("Random")
        .setAuthor({
          name: interaction.user.tag,
          iconURL: interaction.user.displayAvatarURL({
            size: 2048,
            extension: "png",
          }),
        });

      return interaction.editReply({ embeds: [embed] });
    } catch (error) {
      console.error(error);
    }
  },
};
