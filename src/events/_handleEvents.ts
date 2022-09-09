import { ExtendedClient } from "../interfaces/ExtendedClient";
import { logHandler } from "../utils/logHandler";
import { registerCommands } from "../utils/registerCommands";

/**
 * Mounts the Discord gateway event listeners.
 *
 * @param {ExtendedClient} bot The bot's Discord instance.
 */
export const handleEvents = (bot: ExtendedClient) => {
  bot.on("ready", async () => {
    logHandler.log("debug", `Logged in as ${bot.user?.tag}`);
    await registerCommands(bot);
  });
};
