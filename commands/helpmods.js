const Discord = require('discord.js');

exports.run = (bot, message, args, func) => {
    message.channel.send("```css\n beta test ai\nhelpmods commands\n<> mean require and [] means option\npurge Usage: ~purge <amount>\nsetautorole Usage: ~setAutoRole <roleName>\nsetChannel Usage: ~setChannel <#channel>\nsetdm Usage: ~setdm <message> or <none>\nsetPrefix Usage: setPrefix <prefix>\nsetwelcome Usage: ~setwelcome <message> or <none>\nconfig Usage: ~config [to see if there a config on the server]\n```");
}