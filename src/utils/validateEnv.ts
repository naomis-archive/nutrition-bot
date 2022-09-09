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

  return {
    token: process.env.BOT_TOKEN,
    debugHook: new WebhookClient({
      url: process.env.DEBUG_HOOK,
    }),
  };
};
