import { WebhookClient } from "discord.js";

import { ExtendedClient } from "../interfaces/ExtendedClient";

/**
 * Utility to validate the environment variables are defined.
 *
 * @returns {ExtendedClient["env"]} The environment object for the bot.
 */
export const validateEnv = (): ExtendedClient["env"] => {
  if (!process.env.BOT_TOKEN) {
    throw new Error("BOT_TOKEN is not defined");
  }

  if (!process.env.DEBUG_HOOK) {
    throw new Error("DEBUG_HOOK is not defined");
  }

  if (!process.env.HOME_GUILD) {
    throw new Error("HOME_GUILD is not defined");
  }

  if (!process.env.OWNER_ID) {
    throw new Error("OWNER_ID is not defined");
  }

  if (!process.env.NOTIF_CHANNEL) {
    throw new Error("NOTIF_CHANNEL is not defined");
  }

  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not defined");
  }

  return {
    token: process.env.BOT_TOKEN,
    debugHook: new WebhookClient({
      url: process.env.DEBUG_HOOK,
    }),
    homeGuild: process.env.HOME_GUILD,
    ownerId: process.env.OWNER_ID,
    notifChannel: process.env.NOTIF_CHANNEL,
    mongoUri: process.env.MONGO_URI,
  };
};
