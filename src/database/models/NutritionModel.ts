import { model, Schema } from "mongoose";

import { NutritionData } from "../../interfaces/NutritionData";

const NutritionSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  food: {
    type: {
      calories: Number,
      fat: Number,
      cholesterol: Number,
      sodium: Number,
      carbs: Number,
      protein: Number,
    },
  },
  foodNames: [String],
  water: Number,
  alcohol: Number,
  smokes: Number,
});

export default model<NutritionData>("Nutrition", NutritionSchema);
