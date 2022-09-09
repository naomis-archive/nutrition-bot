import { SlashCommandBuilder } from "discord.js";

import { Command } from "../interfaces/Command";
import { generateNutritionEmbed } from "../modules/generateNutritionEmbed";
import { errorHandler } from "../utils/errorHandler";

export const view: Command = {
  data: new SlashCommandBuilder()
    .setName("view")
    .setDescription("View your daily nutrition intake."),
  run: async (bot, interaction) => {
    try {
      const embed = generateNutritionEmbed(bot);

      await interaction.editReply({ embeds: [embed] });
    } catch (err) {
      await errorHandler(bot, "view command", err);
    }
  },
};
