import { Client } from "base";
import discord from "discord.js";

interface EventData {
  name: keyof discord.ClientEvents;
  once?: boolean;
  execute: (client: Client, ...args: any[]) => void;
}

export class Event {
  public name: EventData["name"];
  public once: EventData["once"];
  public execute: EventData["execute"];

  constructor(options: EventData) {
    this.name = options.name;
    this.once = options.once;
    this.execute = options.execute;
  }
}
