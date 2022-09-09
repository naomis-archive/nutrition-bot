import { SlashCommandBuilder } from "discord.js";

import { Command } from "../interfaces/Command";
import { errorHandler } from "../utils/errorHandler";

export const alcohol: Command = {
  data: new SlashCommandBuilder()
    .setName("alcohol")
    .setDescription("Log the consumption of standard alcoholic beverage."),
  run: async (bot, interaction) => {
    try {
      bot.cache.alcohol++;

      await interaction.editReply({
        content: `You have logged ${bot.cache.alcohol} alcoholic beverages today!`,
      });
    } catch (err) {
      await errorHandler(bot, "alcohol command", err);
    }
  },
};
