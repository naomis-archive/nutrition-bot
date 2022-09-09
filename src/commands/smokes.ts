import { SlashCommandBuilder } from "discord.js";

import { Command } from "../interfaces/Command";
import { errorHandler } from "../utils/errorHandler";

export const smokes: Command = {
  data: new SlashCommandBuilder()
    .setName("smokes")
    .setDescription("Log the consumption of a cigarette."),
  run: async (bot, interaction) => {
    try {
      bot.cache.smokes++;

      await interaction.editReply({
        content: `You have logged ${bot.cache.smokes} cigarettes today!`,
      });
    } catch (err) {
      await errorHandler(bot, "smokes command", err);
    }
  },
};
