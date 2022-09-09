import { EmbedBuilder } from "discord.js";

import {
  AlcoholThreshold,
  FoodThresholds,
  SmokeThreshold,
  WaterThreshold,
} from "../config/Thresholds";
import { ExtendedClient } from "../interfaces/ExtendedClient";

import { calculatePercentage } from "./calculatePercentage";
import { fetchNutritionData } from "./fetchNutritionData";
import { generateRatingEmote } from "./generateRatingEmote";

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
      name: `Water ${generateRatingEmote(
        calculatePercentage(data.water, WaterThreshold),
        false
      )}`,
      value: `${data.water}/${WaterThreshold} bottles (${calculatePercentage(
        data.water,
        WaterThreshold
      )}%)`,
      inline: true,
    },
    {
      name: `Smokes ${generateRatingEmote(
        calculatePercentage(data.smokes, SmokeThreshold),
        true
      )}`,
      value: `${
        data.smokes
      }/${SmokeThreshold} cigarettes (${calculatePercentage(
        data.smokes,
        SmokeThreshold
      )}%)`,
      inline: true,
    },
    {
      name: `Alcohol ${generateRatingEmote(
        calculatePercentage(data.alcohol, AlcoholThreshold),
        true
      )}`,
      value: `${data.alcohol}/${AlcoholThreshold} drinks (${calculatePercentage(
        data.alcohol,
        AlcoholThreshold
      )}%)`,
      inline: true,
    },
    {
      name: `Meals ${data.foodNames.length < 3 ? "❌" : "✅"}`,
      value: data.foodNames.join(", ") || "None",
    },
    {
      name: `Calories ${generateRatingEmote(
        calculatePercentage(data.food.calories, FoodThresholds.calories),
        false
      )}`,
      value: `${data.food.calories}/${
        FoodThresholds.calories
      } calories (${calculatePercentage(
        data.food.calories,
        FoodThresholds.calories
      )}%)`,
      inline: true,
    },
    {
      name: `Fat ${generateRatingEmote(
        calculatePercentage(data.food.fat, FoodThresholds.fat),
        false
      )}`,
      value: `${data.food.fat}/${
        FoodThresholds.fat
      } grams of fat (${calculatePercentage(
        data.food.fat,
        FoodThresholds.fat
      )}%)`,
      inline: true,
    },
    {
      name: `Cholesterol ${generateRatingEmote(
        calculatePercentage(data.food.cholesterol, FoodThresholds.cholesterol),
        false
      )}`,
      value: `${data.food.cholesterol}/${
        FoodThresholds.cholesterol
      } milligrams of cholesterol (${calculatePercentage(
        data.food.cholesterol,
        FoodThresholds.cholesterol
      )}%)`,
      inline: true,
    },
    {
      name: `Sodium ${generateRatingEmote(
        calculatePercentage(data.food.sodium, FoodThresholds.sodium),
        false
      )}`,
      value: `${data.food.sodium}/${
        FoodThresholds.sodium
      } milligrams of sodium (${calculatePercentage(
        data.food.sodium,
        FoodThresholds.sodium
      )}%)`,
      inline: true,
    },
    {
      name: `Carbohydrates ${generateRatingEmote(
        calculatePercentage(data.food.carbs, FoodThresholds.carbs),
        false
      )}`,
      value: `${data.food.carbs}/${
        FoodThresholds.carbs
      } grams of carbohydrates (${calculatePercentage(
        data.food.carbs,
        FoodThresholds.carbs
      )}%)`,
      inline: true,
    },
    {
      name: `Protein ${generateRatingEmote(
        calculatePercentage(data.food.protein, FoodThresholds.protein),
        false
      )}`,
      value: `${data.food.protein}/${
        FoodThresholds.protein
      } grams of protein (${calculatePercentage(
        data.food.protein,
        FoodThresholds.protein
      )}%)`,
      inline: true,
    },
  ]);
  return embed;
};
