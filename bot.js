const Discord = require('discord.js');

const TOKEN = "bottoken";  
const PREFIX = "f!";

var fortunes = [
    "8ball: yes",
    "8ball: no",
    "8ball: maybe"
]

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log("ready");
    bot.user.setActivity("Eating frikandels || f!help");
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "help":
            var embed = new Discord.RichEmbed()
                .setTitle("Prefix is f!")
                .addField("!8ball", "ask the ball a question to give answer on.")
                .addField("f!eat", "Eat a frikandel.")
                .addField("f!ping", "get a response from the bot.")
            message.channel.send(embed);
            break;
        case "ping":
            message.channel.send("Pong! and 16 ms latency");
            break;
        case "eat":
            message.channel.send("You ate a frikandel");
            break;
        case "8ball":
            if (args[1]) message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]); 
            else message.channel.send("Can't read that");
            break;
        default:
            message.channel.send("invalid command, use f!help");
    }
});

bot.login(TOKEN);
