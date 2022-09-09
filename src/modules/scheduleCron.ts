import { scheduleJob } from "node-schedule";

import { InitialNutritionData } from "../config/InitialNutritionData";
import { ExtendedClient } from "../interfaces/ExtendedClient";
import { errorHandler } from "../utils/errorHandler";

import { generateNutritionEmbed } from "./generateNutritionEmbed";

/**
 * Module to schedule the daily nutrition notification +
 * reset cron.
 *
 * @param {ExtendedClient} bot The bot's Discord instance.
 */
export const scheduleCron = async (bot: ExtendedClient) => {
  try {
    const home =
      bot.guilds.cache.get(bot.env.homeGuild) ||
      (await bot.guilds.fetch(bot.env.homeGuild));

    if (!home) {
      throw new Error("Could not locate home guild.");
    }

    const channel =
      home.channels.cache.get(bot.env.notifChannel) ||
      (await home.channels.fetch(bot.env.notifChannel));

    if (!channel || !("send" in channel)) {
      throw new Error("Could not locate notification channel.");
    }

    // run daily at midnight server time (pst)
    scheduleJob("0 0 0 * * *", async () => {
      const embed = generateNutritionEmbed(bot);
      await channel.send({
        content: `Hey friends~!\n\nHere is <@!${bot.env.ownerId}>'s nutrition intake for yesterday!`,
        embeds: [embed],
      });

      // eslint-disable-next-line require-atomic-updates
      bot.cache = InitialNutritionData;
    });
  } catch (err) {
    await errorHandler(bot, "cron scheduler", err);
  }
};
