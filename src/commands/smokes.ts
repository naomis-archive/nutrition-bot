import { SlashCommandBuilder } from "discord.js";

import { Command } from "../interfaces/Command";
import { fetchNutritionData } from "../modules/fetchNutritionData";
import { errorHandler } from "../utils/errorHandler";

export const smokes: Command = {
  data: new SlashCommandBuilder()
    .setName("smokes")
    .setDescription("Log the consumption of a cigarette."),
  run: async (bot, interaction) => {
    try {
      const data = await fetchNutritionData(bot);
      data.smokes += 1;
      await data.save();

      await interaction.editReply({
        content: `You have logged ${data.smokes} cigarettes today!`,
      });
    } catch (err) {
      await errorHandler(bot, "smokes command", err);
    }
  },
};
