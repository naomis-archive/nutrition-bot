import { SlashCommandBuilder } from "discord.js";

import { Command } from "../interfaces/Command";
import { fetchNutritionData } from "../modules/fetchNutritionData";
import { errorHandler } from "../utils/errorHandler";

export const food: Command = {
  data: new SlashCommandBuilder()
    .setName("food")
    .setDescription("Log the consumption of a meal.")
    .addStringOption((option) =>
      option
        .setName("name")
        .setDescription("The name of the meal.")
        .setRequired(true)
    )
    .addIntegerOption((option) =>
      option
        .setName("calories")
        .setDescription("The number of calories in the meal.")
        .setRequired(true)
    )
    .addIntegerOption((option) =>
      option
        .setName("fat")
        .setDescription("The grams of fat in the meal.")
        .setRequired(true)
    )
    .addIntegerOption((option) =>
      option
        .setName("cholesterol")
        .setDescription("The milligrams of cholesterol in the meal.")
        .setRequired(true)
    )
    .addIntegerOption((option) =>
      option
        .setName("sodium")
        .setDescription("The milligrams of sodium in the meal.")
        .setRequired(true)
    )
    .addIntegerOption((option) =>
      option
        .setName("carbs")
        .setDescription("The grams of carbohydrates in the meal.")
        .setRequired(true)
    )
    .addIntegerOption((option) =>
      option
        .setName("protein")
        .setDescription("The grams of protein in the meal.")
        .setRequired(true)
    ),
  run: async (bot, interaction) => {
    try {
      const name = interaction.options.getString("name", true);
      const calories = interaction.options.getInteger("calories", true);
      const fat = interaction.options.getInteger("fat", true);
      const cholesterol = interaction.options.getInteger("cholesterol", true);
      const sodium = interaction.options.getInteger("sodium", true);
      const carbs = interaction.options.getInteger("carbs", true);
      const protein = interaction.options.getInteger("protein", true);

      const data = await fetchNutritionData(bot);

      data.foodNames.push(name);
      data.food.calories += calories;
      data.food.fat += fat;
      data.food.cholesterol += cholesterol;
      data.food.sodium += sodium;
      data.food.carbs += carbs;
      data.food.protein += protein;
      data.markModified("foodNames");
      data.markModified("food");
      await data.save();

      await interaction.editReply({
        content: `Your ${name} meal has been logged!`,
      });
    } catch (err) {
      await errorHandler(bot, "food command", err);
    }
  },
};
