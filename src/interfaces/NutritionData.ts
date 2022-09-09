export interface NutritionData {
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
