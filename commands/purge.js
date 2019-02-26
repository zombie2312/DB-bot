exports.run = (bot, message, args, func) => {
   async function  purge() {
       message.delete();

       if (!message.member.roles.find("name", "bot-commander")) {
           message.channel.send('You need the \`bot-commander\` role to use this command');
           return;
       }

       if (isNaN(args[0])) {
           message.channel.send('Please use a number as arguments. \n Usage: ' + prefix + 'puurge <amount>');
           return;
       }

       const fetched = await message.channel.fetchMessage({limit: args[0]});
       console.log(fetched.size + ' message found, deleting...');

       message.channel.bulkDelete(fetched)
         .catch(error => message.channel.send(`Error: ${error}`));
       
   }
   purge();
    
 
};