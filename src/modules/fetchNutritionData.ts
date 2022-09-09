import { InitialNutritionData } from "../config/InitialNutritionData";
import NutritionModel from "../database/models/NutritionModel";
import { ExtendedClient } from "../interfaces/ExtendedClient";
import { NutritionData } from "../interfaces/NutritionData";

/**
 * Module to fetch nutrition data from the database.
 *
 * @param {ExtendedClient} bot The bot's Discord instance.
 * @returns {Promise<NutritionData>} The nutrition data.
 */
export const fetchNutritionData = async (
  bot: ExtendedClient
): Promise<NutritionData> => {
  const data =
    (await NutritionModel.findOne({ userId: bot.env.ownerId })) ||
    (await NutritionModel.create({
      userId: bot.env.ownerId,
      ...InitialNutritionData,
    }));
  return data;
};
