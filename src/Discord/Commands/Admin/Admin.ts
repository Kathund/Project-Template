import Command from '../../Private/Commands/Command.ts';
import CommandData from '../../Private/Commands/CommandData.ts';
import { CommandResponse } from '../../../Types/Discord.ts';
import type DiscordManager from '../../DiscordManager.ts';
import type { ChatInputCommandInteraction } from 'discord.js';

class Admin extends Command {
  constructor(discord: DiscordManager) {
    super(discord);
    this.data = new CommandData().setName('admin').setDescription('admin');
    this.response = CommandResponse.Ephemeral;
  }

  override async execute(interaction: ChatInputCommandInteraction): Promise<void> {
    await interaction.followUp({
      content:
        // eslint-disable-next-line @stylistic/max-len
        'This command can be run any where with only user install. It also requires you to be the owner or in the team with the bot'
    });
  }
}

export default Admin;
