import { Client, WebhookClient } from "discord.js";

import { Command } from "./Command";

export interface ExtendedClient extends Client {
  env: {
    token: string;
    debugHook: WebhookClient;
    homeGuild: string;
    ownerId: string;
    notifChannel: string;
    mongoUri: string;
  };
  commands: Command[];
}
