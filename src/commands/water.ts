import { SlashCommandBuilder } from "discord.js";

import { Command } from "../interfaces/Command";
import { errorHandler } from "../utils/errorHandler";

export const water: Command = {
  data: new SlashCommandBuilder()
    .setName("water")
    .setDescription("Log the consumption of a 16oz water bottle."),
  run: async (bot, interaction) => {
    try {
      bot.cache.water++;

      await interaction.editReply({
        content: `You have logged ${bot.cache.water} water bottles today!`,
      });
    } catch (err) {
      await errorHandler(bot, "water command", err);
    }
  },
};
