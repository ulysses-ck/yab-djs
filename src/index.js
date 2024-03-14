// Require the necessary discord.js classes
import { Client, Events, GatewayIntentBits } from "discord.js";

const TOKEN = process.env.DISCORD_TOKEN_BOT;

console.log("Starting Bot...");

// client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.Ready, (readyClient) => {
  console.log(`Logged in as ${readyClient.user.tag}!`);
});

client.login(TOKEN);
