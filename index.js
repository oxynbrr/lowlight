require("colors");
const fs = require("fs")
const { Collection } = require("discord.js")
const { Client, GatewayIntentBits, Partials, EmbedBuilder } = require("discord.js");
const client = new Client ({  intents:53608447 });
const { loadSlash } = require("./handlers/slashHandler")
const { loadEvents } = require("./handlers/eventHandler")
require("dotenv").config()



client.on("ready", () => {
	console.log(`Conectado como ${client.user.username}`.green)
});

const { ActivityType } = require(`discord.js`);


client.on("ready", () => {

	const time = (200*5);

	let status = [
	[{
		name: "Low Light",
		type: ActivityType.Streaming,
        url:  "https://www.youtube.com/watch?v=1vhh8z8bkko"
	}],
	[{
	
		name: "Low Light",
		type: ActivityType.Streaming,
        url:  "https://www.youtube.com/watch?v=1vhh8z8bkko"
	}]
	];
	setInterval(() => {
		function randomStatus() {
			let astatus = status[Math.floor(Math.random() * status.length)];
			client.user.setPresence({ activities: astatus, status: "dnd" });
	}
	randomStatus();
   }, time)
	console.log(`Conectado como ${client.user.username}`.green)
});

client.on("guildMemberAdd", (member) => {

	const embed = new EmbedBuilder()
	.setColor("Green")
	.setDescription(`Bienvenido/a usuario ${member.user.username} `)
	.addFields(
		{ name: "No olvides leer las reglas", value: "reglas: <#1293802875998310420>" },
	)
	.setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
	.setTimestamp()

	client.channels.cache.get("1294197587666141236").send({ embeds: [embed] })
});
const config = require("./config.json")
let prefix = config.prefix; 

client.on("messageCreate", async (message) => {

	if(!message.content.startsWith(prefix)) return;
	if(message.author.bot) return;
	
	if(message.content.startsWith(prefix + "ping")) {
		message.channel.send("pong")//
	}
	if(message.content.startsWith("Low Light")) {
		const embed = new EmbedBuilder()
		.setColor("White")
		.setDescription("Playlist Oficial De La Low Light https://open.spotify.com/playlist/0IqhPk05qpP9x3Ywprve2H?si=d3cbab45734b42e0&pt=c41165e12e34cbce9c4baafaca0dd57b")
		.setTitle("Low Light Playlist")
		.setImage("https://cdn.discordapp.com/attachments/1080690879314010225/1295557438887428148/central-cee-vogue-business-story.png?ex=670f1563&is=670dc3e3&hm=7b38bb077202bf05d2ee274100197c599e208ad807b409bb271ef6dbd7920395&")
		message.channel.send({ embeds: [embed] })
	}
	if(message.content.startsWith("xaska")) {
		message.channel.send("no hably tan reventao hijo la gran perra kualkier wea yo el ma xoro de aki el ke la llea y el ke roa de menor me epitiao kualkier monea brr")//
	}
})  	


client.on("messageCreate", async (message) => {

	if(message.content.startsWith("espuma ve mi perfil")) {
		message.channel.send("espuma <@954865691373228103> ve mi perfil y entra a donde dice ver vas a flipar despues me lo agradeces By Toaesa <@776998630082609213>")//
	}
})  	


client.slashCommands = new Collection();

(async () => {
    await client
    .login(process.env.TOKEN)
    .catch((err) => 
        console.error(`» | Error al inciar el bot => ${err}`));
})();

loadEvents(client)
client.on("ready", async () => {
    await loadSlash(client)
    .then(() => {
        console.log("» | Comando cargados con exito");
    })
    //.catch((err) => 
    //    console.error(`» | Error al cargar los comandos => ${err}`));
    console.log(`» | Bot encendido con la cuenta de: ${client.user.tag}`)
})
   



client.login("MTI5MzgyNDMzNTI5MDgzMDg3OQ.GdTVdF.97bfYP-WG5_G8O5Ym8W3sY5TRZc5zb5rRc0cbU");