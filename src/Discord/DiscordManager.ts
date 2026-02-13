import ButtonHandler from './Handlers/ButtonHandler.ts';
import CommandHandler from './Handlers/CommandHandler.ts';
import DiscordUtils from './Private/DiscordUtils.ts';
import InteractionHandler from './Handlers/InteractionHandler.ts';
import StateHandler from './Handlers/StateHandler.ts';
import { Client, Events, GatewayIntentBits } from 'discord.js';
import type Application from '../Application.ts';

class DiscordManager {
  readonly Application: Application;
  readonly interactionHandler: InteractionHandler;
  readonly stateHandler: StateHandler;
  readonly commandHandler: CommandHandler;
  readonly buttonHandler: ButtonHandler;
  readonly utils: DiscordUtils;
  client?: Client;
  constructor(app: Application) {
    this.Application = app;
    this.interactionHandler = new InteractionHandler(this);
    this.stateHandler = new StateHandler(this);
    this.commandHandler = new CommandHandler(this);
    this.buttonHandler = new ButtonHandler(this);
    this.utils = new DiscordUtils(this);
  }

  async connect(): Promise<void> {
    this.client = new Client({ intents: [GatewayIntentBits.Guilds] });
    await this.commandHandler.deployCommands();
    this.client.on(Events.ClientReady, () => this.stateHandler.onReady());
    this.client.on(Events.InteractionCreate, (interaction) => this.interactionHandler.onInteraction(interaction));
    this.client.login(process.env.DISCORD_TOKEN).catch((e) => console.error(e));
  }
}

export default DiscordManager;
