const Discord = require('discord.js');

const TOKEN = "bottoken";  
const PREFIX = "f!";

var fortunes = [
    "8ball: It is certain ✔",
    "8ball: It is decidedly so ✔",
    "8ball: Without a doubt ✔",
    "8ball: definitely ✔",
    "8ball: You may rely on it ✔",
    "8ball: As I see it, yes ✔",
    "8ball: Most likely ✔",
    "8ball: Outlook good ✔",
    "8ball: Yes ✔",
    "8ball: Signs point to yes ✔",
    "8ball: Reply hazy, try again ●",
    "8ball: Ask again later ●",
    "8ball: Better not tell you now ●",
    "8ball: Cannot predict now ●",
    "8ball: Concentrate and ask again ●",
    "8ball: Don't count on it X",
    "8ball: My reply is no X",
    "8ball: My sources say no X",
    "8ball: Outlook not so good X",
    "8ball: Very doubtful X"
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
                .addField("f!eat", "Eat a frikandel.")
                .addField("f!ping", "get a response from the bot.")
                .addField("!8ball", "ask the ball a question to give answer on. ✔=yes ●=no answer X=no")
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
