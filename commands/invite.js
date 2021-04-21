const Discord = require('discord.js')
const config = require("../config");
const prefix = config.prefix;

module.exports = {
 name: "invite",
 aliases: [],
 description: "Invite me to your server",
 category: "Utility",
 usage: "invite",
 run: async (client, message, args) => {
  try {
   const embed = new Discord.MessageEmbed()
    .setTitle(`<a:sucess:759354039242063903> YAY!`, message.author.displayAvatarURL({ dynamic: true, format: 'png', size: 2048 }))
    .setColor("RANDOM")
    .setDescription(`:tada: [Click this link to invite me!](https://discord.com/oauth2/authorize/?permissions=${config.premissions}&scope=${config.scopes}&client_id=${client.user.id} [Recomended!]\nOr [click this link to invite me **as root**](https://discord.com/oauth2/authorize/?permissions=8&scope=${config.scopes}&client_id=${client.user.id} [Not recomended!]`)
    .setTimestamp()
    .setFooter(`~${client.user.username} created by ${config.author}`, message.author.displayAvatarURL({ dynamic: true, format: 'png', size: 2048 }))
   return message.channel.send(embed);
  } catch (err) {
   console.log(err);
   message.channel.send({embed: {
    color: 16734039,
    description: "Something went wrong... :cry:"
   }})
  }
 }
}
