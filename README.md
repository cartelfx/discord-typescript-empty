# discord-typescript-empty

typescript dili ile yazılmış v14 boş altyapıdır düzenlenmesi gereken kısım ```src/source/system/config``` botu birkezlik başlatmak için ```npm start``` her yenilemede tekrar başlamasını istiyorsanız ```npm run dev``` yazarak çalıştırın, içinde slash, context, prefix komutları bulunuyor.

# PREFİX KOMUT TASLAĞI
```javascript
import { Command } from "@/models";

export default new Command({
  name: "eval",
  description: "sa karsm",
  aliases: ["e"],
  cooldown: 3,
  execute(client, message, args) {
//KOMUT İÇERİĞİ
},
});
```
