const weather = require('weather-js');
const Discord = require('discord.js');

exports.run = (bot, message, args, func) => {
    weather.find({search: args.join(" "), degreeType:'F'}, function(err, result){
        if (err) message.channel.send(err);

        if (result === undefined || result.length === 0) {
            message.channel.send('Please enter a valid location. (example: NewYork )')
            return;
        }

        //message.channel.send(JSON.stringify(result[0].current, null, 2));

        var current = result[0].current;
        var location = result[0].location;

        const embed = new Discord.RichEmbed()
          .setDescription(`**${current.skytext}**`)
          .setAuthor(`Weather for ${current.observationpoint}`)
          .setThumbnail(current.imageUrl)
          .setColor(0x00AE86)
          .addField(`Timezone`,`UTC${location.timezone}`, true)
          .addField('Degree Type', location.degreeType, true)
          .addField('Temperature', `${current.temperature} Degree`, true)
          .addField('Feels Like', `${current.feelslike} Degree`, true)
          .addField('Winds', current.winddisplay, true)
          .addField('Humidity', `${current.humidity}%`, true)

          message.channel.send({embed});
    });
};
