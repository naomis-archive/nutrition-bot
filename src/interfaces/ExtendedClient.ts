import { Client, WebhookClient } from "discord.js";

import { Command } from "./Command";
import { NutritionData } from "./NutritionData";

export interface ExtendedClient extends Client {
  env: {
    token: string;
    debugHook: WebhookClient;
    homeGuild: string;
    ownerId: string;
    notifChannel: string;
  };
  commands: Command[];
  cache: NutritionData;
}
