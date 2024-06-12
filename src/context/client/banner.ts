import { ContextMenuCommandInteraction, ContextMenuCommandBuilder, GuildMember, EmbedBuilder } from "discord.js";
import { Client } from "base";

export default {
  data: new ContextMenuCommandBuilder().setName("Banner").setType(2),
  execute(client: Client, interaction: ContextMenuCommandInteraction) {
    try {
      const member: GuildMember | undefined =
        interaction.guild?.members.cache.get(interaction.targetId);
      const embed = new EmbedBuilder()
        .setTitle(`${member?.user.username} kişisinin banneri.`)
        .setImage(
          member?.user.bannerURL({ size: 2048, extension: "png" }) ||
            null
        )
        .setColor("Random")
        .setAuthor({
          name: interaction.user.tag,
          iconURL: interaction.user.bannerURL({
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
