import { EmbedBuilder } from "discord.js";

import { ExtendedClient } from "../interfaces/ExtendedClient";

/**
 * Module to convert cached nutrition data into an embed.
 *
 * @param {ExtendedClient} bot The bot's Discord instance.
 * @returns {EmbedBuilder} The embed to send to the user.
 */
export const generateNutritionEmbed = (bot: ExtendedClient): EmbedBuilder => {
  const embed = new EmbedBuilder();
  embed.setTitle("Daily Nutrition Intake");
  embed.setDescription("Here is your current progress for the day.");
  embed.addFields([
    {
      name: "Water",
      value: `${bot.cache.water} bottles`,
      inline: true,
    },
    {
      name: "Smokes",
      value: `${bot.cache.smokes} cigarettes`,
      inline: true,
    },
    {
      name: "Alcohol",
      value: `${bot.cache.alcohol} drinks`,
      inline: true,
    },
    {
      name: "Meals",
      value: bot.cache.foodNames.join(", ") || "None",
    },
    {
      name: "Calories",
      value: `${bot.cache.food.calories} calories`,
      inline: true,
    },
    {
      name: "Fat",
      value: `${bot.cache.food.fat} grams of fat`,
      inline: true,
    },
    {
      name: "Cholesterol",
      value: `${bot.cache.food.cholesterol} milligrams of cholesterol`,
      inline: true,
    },
    {
      name: "Sodium",
      value: `${bot.cache.food.sodium} milligrams of sodium`,
      inline: true,
    },
    {
      name: "Carbohydrates",
      value: `${bot.cache.food.carbs} grams of carbohydrates`,
      inline: true,
    },
    {
      name: "Protein",
      value: `${bot.cache.food.protein} grams of protein`,
      inline: true,
    },
  ]);
  return embed;
};
