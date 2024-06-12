import { GatewayIntentBits, Partials } from "discord.js";
import { Client } from "./src/base";

const client = new Client({
  intents: (Object.keys(GatewayIntentBits) as (keyof typeof GatewayIntentBits)[])
    .map(
      (intent: keyof typeof GatewayIntentBits) =>
        GatewayIntentBits[intent as keyof typeof GatewayIntentBits] as typeof GatewayIntentBits[keyof typeof GatewayIntentBits]
    ) as typeof GatewayIntentBits[keyof typeof GatewayIntentBits][],
  partials: (Object.keys(Partials) as (keyof typeof Partials)[])
    .map(
      (partial: keyof typeof Partials) =>
        Partials[partial as keyof typeof Partials] as typeof Partials[keyof typeof Partials]
    )
});

(global as any).client = client;
(global as any)._bot = client;
(global as any)._client = client;

client.initialize();

process.on("uncaughtException", err => console.error(err));
process.on("uncaughtExceptionMonitor", err => console.error(err));
process.on("unhandledRejection", err => console.error(err));