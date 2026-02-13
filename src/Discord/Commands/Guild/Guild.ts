import Command from '../../Private/Commands/Command.ts';
import CommandData from '../../Private/Commands/CommandData.ts';
import type DiscordManager from '../../DiscordManager.ts';
import type { ChatInputCommandInteraction } from 'discord.js';

class Guild extends Command {
  constructor(discord: DiscordManager) {
    super(discord);
    this.data = new CommandData().setName('guild').setDescription('guild');
  }

  override async execute(interaction: ChatInputCommandInteraction): Promise<void> {
    await interaction.followUp({
      content:
        // eslint-disable-next-line @stylistic/max-len
        'This command can only be ran inside ran inside a guild. It also requires the bot to be installed via guild install'
    });
  }
}

export default Guild;
