import { Client } from "discord.js";

import { InitialNutritionData } from "./config/InitialNutritionData";
import { IntentOptions } from "./config/IntentOptions";
import { handleEvents } from "./events/_handleEvents";
import { ExtendedClient } from "./interfaces/ExtendedClient";
import { loadCommands } from "./utils/loadCommands";
import { validateEnv } from "./utils/validateEnv";

(async () => {
  const bot = new Client({ intents: IntentOptions }) as ExtendedClient;
  bot.env = validateEnv();
  bot.commands = await loadCommands(bot);
  bot.cache = InitialNutritionData;

  handleEvents(bot);

  await bot.login(bot.env.token);
})();
