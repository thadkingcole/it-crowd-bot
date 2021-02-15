require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();

// load env variables
const { channelId, prefix, token } = process.env;

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (message) => {
  // if the message is in the tech-support channel and starts with HELLO IT
  if (
    message.channel.id === channelId &&
    message.content.startsWith("HELLO IT")
  ) {
    message.channel.send("Have you tried turning it off and on again?");
  }
});

client.login(token);
