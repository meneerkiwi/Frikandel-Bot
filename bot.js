const Discord = require('discord.js');

const TOKEN = "NDAzMTIxOTIzODY3MDE3MjI2.DUFDLA.BiJU228sx12ban29ZJuONhcjMPw";  
const PREFIX = "f!";

var fortunes = [
    "8ball: yes",
    "8ball: no",
    "8ball: maybe"
]

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log("ready");
    bot.user.setGame("Eating frikandels || f!help");
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "help":
            message.channel.sendMessage("The command prefix is '!' the commands are: ping, eat, 8ball")
            break;
        case "ping":
            message.channel.sendMessage("Pong!");
            break;
        case "eat":
            message.channel.sendMessage("You ate a frikandel.");
            break;
        case "8ball":
            if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]); 
                else message.channel.sendMessage("Can't read that");
                break;
        default:
            message.channel.sendMessage("invalid command, use f!help");
    }
});

bot.login(TOKEN);
