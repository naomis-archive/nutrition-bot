import { ExtendedClient } from "../interfaces/ExtendedClient";
import { logHandler } from "../utils/logHandler";

/**
 * Mounts the Discord gateway event listeners.
 *
 * @param {ExtendedClient} bot The bot's Discord instance.
 */
export const handleEvents = (bot: ExtendedClient) => {
  bot.on("ready", () => {
    logHandler.log("debug", `Logged in as ${bot.user?.tag}`);
  });
};
