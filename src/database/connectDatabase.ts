import { connect } from "mongoose";

import { ExtendedClient } from "../interfaces/ExtendedClient";
import { errorHandler } from "../utils/errorHandler";
import { logHandler } from "../utils/logHandler";

/**
 * Module to instantiate a connection to the MongoDB database.
 *
 * @param {ExtendedClient} bot The bot's Discord instance.
 */
export const connectDatabase = async (bot: ExtendedClient) => {
  try {
    await connect(bot.env.mongoUri);
    logHandler.log("debug", "Connected to MongoDB database!");
  } catch (err) {
    await errorHandler(bot, "database connection", err);
  }
};
