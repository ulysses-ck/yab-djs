import { SlashCommandBuilder } from "discord.js";

export default {
  data: new SlashCommandBuilder().setName("ping").setDescription("A command that reply with Pong!"),
  async execute(interaction) {
    await interaction.reply("Pong!");
  },
};
