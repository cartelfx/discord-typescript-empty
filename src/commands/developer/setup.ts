import { Command } from "@/models";
import { StringSelectMenuBuilder, StringSelectMenuOptionBuilder } from "@discordjs/builders";
import { ActionRowBuilder } from "discord.js";
export default new Command({
  name: "setup",
  description: "Sistemin kurulumu yapılır.",
  aliases: ["s", "server", "kurulum"],
  cooldown: 0,
  execute(client, message, args) {

    let seçim = args[0]
    if(!seçim) {
      const setup = new ActionRowBuilder().addComponents(
        new StringSelectMenuBuilder()
        .setCustomId("menu")
        .setPlaceholder("Ayarlar")
        .addOptions(
          new StringSelectMenuOptionBuilder()
            .setLabel('Sistemi yeniden başlat')
            .setDescription('Sistemi yeniden başlatır.')
            .setValue('restart'),
          new StringSelectMenuOptionBuilder()
            .setLabel('Sistemi kapat')
            .setDescription('Sistemi tamamen kapatır.')
            .setValue('poweroff'),
          new StringSelectMenuOptionBuilder()
            .setLabel('web')
            .setDescription('web getir')
            .setValue('ramal')
        )
      )
      
    }
  }
});
