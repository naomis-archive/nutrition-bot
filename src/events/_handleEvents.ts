import { ExtendedClient } from "../interfaces/ExtendedClient";
import { scheduleCron } from "../modules/scheduleCron";
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
    await scheduleCron(bot);
  });

  bot.on("interactionCreate", async (interaction) => {
    if (interaction.isChatInputCommand()) {
      await interaction.deferReply({ ephemeral: true });

      if (interaction.user.id !== bot.env.ownerId) {
        await interaction.editReply({
          content: "This bot can only be used by Naomi at this time!",
        });
        return;
      }
      const command = bot.commands.find(
        (c) => c.data.name === interaction.commandName
      );

      if (!command) {
        await interaction.editReply({
          content: "This command appears to be invalid",
        });
        return;
      }

      await command.run(bot, interaction);
    }
  });
};
