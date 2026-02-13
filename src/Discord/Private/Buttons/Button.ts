import { ButtonResponse, CommandType } from '../../../Types/Discord.ts';
import type ButtonData from './ButtonData.ts';
import type DiscordManager from '../../DiscordManager.ts';
import type { ButtonInteraction } from 'discord.js';

class Button {
  protected readonly discord: DiscordManager;
  data!: ButtonData;
  type: CommandType;
  response: ButtonResponse;
  constructor(discord: DiscordManager) {
    this.discord = discord;
    this.type = CommandType.General;
    this.response = ButtonResponse.Ephemeral;
  }

  setType(type: CommandType): this {
    this.type = type;
    return this;
  }

  execute(interaction: ButtonInteraction): Promise<void> | void {
    throw new Error('Execute Method not implemented!');
  }
}

export default Button;
