import { Client, WebhookClient } from "discord.js";

export interface ExtendedClient extends Client {
  env: {
    token: string;
    debugHook: WebhookClient;
  };
}
