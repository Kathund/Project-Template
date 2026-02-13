import Button from '../../Private/Buttons/Button.ts';
import ButtonData from '../../Private/Buttons/ButtonData.ts';
import type DiscordManager from '../../DiscordManager.ts';
import type { ButtonInteraction } from 'discord.js';

class General extends Button {
  constructor(discord: DiscordManager) {
    super(discord);
    this.data = new ButtonData('general');
  }

  override async execute(interaction: ButtonInteraction): Promise<void> {
    await interaction.followUp({
      content: 'This button can be clicked by anyone anywhere. There are no permission checks on it'
    });
  }
}

export default General;
