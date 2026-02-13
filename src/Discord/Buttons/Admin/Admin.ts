import Button from '../../Private/Buttons/Button.ts';
import ButtonData from '../../Private/Buttons/ButtonData.ts';
import type DiscordManager from '../../DiscordManager.ts';
import type { ButtonInteraction } from 'discord.js';

class Admin extends Button {
  constructor(discord: DiscordManager) {
    super(discord);
    this.data = new ButtonData('admin');
  }

  override async execute(interaction: ButtonInteraction): Promise<void> {
    await interaction.followUp({
      content:
        'This button requires you to be the owner or in the team with the bot for it to get to the execute function'
    });
  }
}

export default Admin;
