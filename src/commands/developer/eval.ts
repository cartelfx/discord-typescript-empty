import { Command } from "@/models";

export default new Command({
  name: "eval",
  description: "sa karsm",
  aliases: ["e"],
  cooldown: 3,
  execute(client, message, args) {
    if (!args.length) return message.channel.send('Kod belirtilmedi!');
    if (message.author.id !== "719117042904727635") return;

    if (args.join(' ').includes('client.token')) {
      return message.channel.send('client.token kullanımı yasak!');
    }
    let code = args.join(' ');
    try {
      let evaled = eval(code);

      if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);

      message.channel.send(`\`\`\`js\n${evaled}\n\`\`\``);
    } catch (err) {
      message.channel.send(`Hata: \`\`\`js\n${err}\n\`\`\``);
    }
    
  },
});

