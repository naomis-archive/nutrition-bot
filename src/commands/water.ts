import { SlashCommandBuilder } from "discord.js";

import { Command } from "../interfaces/Command";
import { fetchNutritionData } from "../modules/fetchNutritionData";
import { errorHandler } from "../utils/errorHandler";

export const water: Command = {
  data: new SlashCommandBuilder()
    .setName("water")
    .setDescription("Log the consumption of a 16oz water bottle."),
  run: async (bot, interaction) => {
    try {
      const data = await fetchNutritionData(bot);
      data.water += 1;
      await data.save();

      await interaction.editReply({
        content: `You have logged ${data.water} water bottles today!`,
      });
    } catch (err) {
      await errorHandler(bot, "water command", err);
    }
  },
};
