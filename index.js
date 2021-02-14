const Discord = require("discord.js");
const { prefix, token } = require("./config.json");
const client = new Discord.Client();

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
  console.log(msg);
  if (message.content === `${prefix}ping`) {
    message.channel.send("Pong.");
  } else if (message.content === `${prefix}beep`) {
    message.channel.send("Boop.");
  }
});

client.login(token);
