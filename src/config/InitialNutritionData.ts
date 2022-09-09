import { Document } from "mongoose";

import { NutritionData } from "../interfaces/NutritionData";

export const InitialNutritionData: Omit<NutritionData, keyof Document> = {
  food: {
    calories: 0,
    fat: 0,
    cholesterol: 0,
    sodium: 0,
    carbs: 0,
    protein: 0,
  },
  foodNames: [],
  water: 0,
  alcohol: 0,
  smokes: 0,
};
