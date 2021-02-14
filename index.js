const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (message) => {
  // if the message is in the tech-support channel and starts with HELLO IT
  if (
    message.channel.id === config.channelId &&
    message.content.startsWith("HELLO IT")
  ) {
    message.channel.send("Have you tried turning it off and on again?");
  }
});

client.login(config.token);
