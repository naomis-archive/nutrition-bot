import { Document } from "mongoose";

export interface NutritionData extends Document {
  food: {
    calories: number;
    fat: number;
    cholesterol: number;
    sodium: number;
    carbs: number;
    protein: number;
  };
  foodNames: string[];
  water: number;
  alcohol: number;
  smokes: number;
}
