import { EmbedBuilder } from "discord.js";

import { ExtendedClient } from "../interfaces/ExtendedClient";

import { fetchNutritionData } from "./fetchNutritionData";

/**
 * Module to convert cached nutrition data into an embed.
 *
 * @param {ExtendedClient} bot The bot's Discord instance.
 * @returns {EmbedBuilder} The embed to send to the user.
 */
export const generateNutritionEmbed = async (
  bot: ExtendedClient
): Promise<EmbedBuilder> => {
  const data = await fetchNutritionData(bot);
  const embed = new EmbedBuilder();
  embed.setTitle("Daily Nutrition Intake");
  embed.setDescription("Here is your current progress for the day.");
  embed.addFields([
    {
      name: "Water",
      value: `${data.water} bottles`,
      inline: true,
    },
    {
      name: "Smokes",
      value: `${data.smokes} cigarettes`,
      inline: true,
    },
    {
      name: "Alcohol",
      value: `${data.alcohol} drinks`,
      inline: true,
    },
    {
      name: "Meals",
      value: data.foodNames.join(", ") || "None",
    },
    {
      name: "Calories",
      value: `${data.food.calories} calories`,
      inline: true,
    },
    {
      name: "Fat",
      value: `${data.food.fat} grams of fat`,
      inline: true,
    },
    {
      name: "Cholesterol",
      value: `${data.food.cholesterol} milligrams of cholesterol`,
      inline: true,
    },
    {
      name: "Sodium",
      value: `${data.food.sodium} milligrams of sodium`,
      inline: true,
    },
    {
      name: "Carbohydrates",
      value: `${data.food.carbs} grams of carbohydrates`,
      inline: true,
    },
    {
      name: "Protein",
      value: `${data.food.protein} grams of protein`,
      inline: true,
    },
  ]);
  return embed;
};
