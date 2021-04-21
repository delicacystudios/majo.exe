const Discord = require('discord.js')
const canvacord = require("canvacord");
const config = require("../config");
const prefix = config.prefix;

module.exports = {
 name: "jail",
 aliases: [],
 description: "Sends user to jail",
 category: "Image",
 usage: "jail [user mention, user id, user name]",
 run: async (client, message, args) => {
  try {
   const User = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase().includes() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase().includes() === args.join(' ').toLocaleLowerCase()) || message.member;
   const wait = await message.channel.send({embed: {
    color: 4779354,
    description: "Please wait... I'm generating your image",
    footer: "This message will be deleted in 5 secounds"
   }})
   const jail = await canvacord.Canvas.jail(User.user.displayAvatarURL({ dynamic: false, format: 'png', size: 2048 }));
   const attachment = new Discord.MessageAttachment(jail, "jail.png");
   message.channel.send(attachment);
   wait.delete({
    timeout: 5000
   });
  } catch (err) {
   console.log(err);
   message.channel.send({embed: {
    color: 16734039,
    description: "Something went wrong... :cry:"
   }})
  }
 }
}
