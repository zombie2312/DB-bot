const Discord = require('discord.js');

exports.run = (bot, message, args, func) => {
    
    const embed = new Discord.RichEmbed()
    .setDescription('help commands')
    .setAuthor('beta test ai')
    .setColor(0x00AE86)
    .addField('ping Usage: ~ping [to see if the bot running]')
    .addField('weather Usage: ~weather (example: NewYork)')
    .addField('Hook Usage: ~hook <title>, <message>, [HEXcolor], [avatarUrl]')
    .addField('messages Usage: ~messages [to see how messages you sent')
    .addField('review Usage: *~review @user __<message>__ --#*')
    .addField('reviews Usage: *~reviews __@user__*')
    .addField('helpmods Usage: *~helpmods [to give mods help]*')

    message.channel.send({embed});
}