import { ActivityType } from "discord.js";
import { Event } from "@/models";

export default new Event({
  name: "ready",
  async execute(client) {
      await client.application?.fetch();
      await client.loadSlash();
      console.log(`Client is activated.`);
      client.user?.setPresence({
        activities: [
          { name: "cartelfx", type: ActivityType.Playing },
        ],
        status: "online",
      });
  },
});
