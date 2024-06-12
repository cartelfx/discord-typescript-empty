import { Client as Cartel, ClientOptions, Collection } from "discord.js";
import { Command } from "@/models";
import { config } from "../source/system/config";
import {
  CommandHandler,
  EventHandler,
  ContextHandler,
  SlashCommandHandler,
} from "@/handlers";
import { Logger } from "base";

export class Client extends Cartel {
  public commands: Collection<string, Command>;
  public aliases: Collection<string, string>;
  public slash: Collection<string, any>;
  public _system: typeof config;
  public logger: Logger;

  constructor(opt: ClientOptions) {
    super(opt);
    this.commands = new Collection();
    this.aliases = new Collection();
    this.slash = new Collection();
    this._system = config;
    this.logger = new Logger();
  }


  public async initialize() {
    await this.login(this._system.token);
    CommandHandler(this);
    EventHandler(this);
    SlashCommandHandler(this);
    ContextHandler(this);
  }

  public async loadSlash() {
    const testServer = this.guilds.cache.get(this._system.slash.serverTest);
    if (!testServer) {
      throw new Error("TSunucu bulunamadı.");
    } else {
      let slash_status: string;
      if (this._system.slash.testing) {
        slash_status = "(guild)";
        await testServer.commands.set(this.slash.map(cmd => cmd.data.toJSON()))
          .catch(console.error);
      } else {
        slash_status = "(public)";
        this.application?.commands.set(this.slash.map(cmd => cmd.data.toJSON()))
          .catch(console.error);
      }
      console.log(`Slash ve context komutlar yüklendi. ${slash_status}`);
    }
  }
}