import { Client } from "base";
import discord, { Message } from "discord.js";
export interface CommandData {
  name: string;
  description: string;
  cooldown: number;
  aliases: string[];
  memberPerms?: string[];
  clientPerms?: string[];
  execute: (client: Client, message: Message, args: string[]) => void;
}

export class Command {
  public name: CommandData["name"];
  public description: CommandData["description"];
  public cooldown: CommandData["cooldown"];
  public aliases: CommandData["aliases"];
  public memberPerms: CommandData["memberPerms"];
  public clientPerms: CommandData["clientPerms"];
  public execute: CommandData["execute"];

  constructor(options: CommandData) {
    this.name = options.name;
    this.description = options.description;
    this.cooldown = options.cooldown;
    this.aliases = options.aliases;
    this.memberPerms = options.memberPerms;
    this.clientPerms = options.clientPerms;
    this.execute = options.execute;
  }
}
