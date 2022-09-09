import { SlashCommandBuilder } from "discord.js";

import { Command } from "../interfaces/Command";
import { fetchNutritionData } from "../modules/fetchNutritionData";
import { errorHandler } from "../utils/errorHandler";

export const alcohol: Command = {
  data: new SlashCommandBuilder()
    .setName("alcohol")
    .setDescription("Log the consumption of standard alcoholic beverage."),
  run: async (bot, interaction) => {
    try {
      const data = await fetchNutritionData(bot);
      data.alcohol += 1;
      await data.save();

      await interaction.editReply({
        content: `You have logged ${data.alcohol} alcoholic beverages today!`,
      });
    } catch (err) {
      await errorHandler(bot, "alcohol command", err);
    }
  },
};
