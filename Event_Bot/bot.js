const Discord = require("discord.js");
const { token, Prefix, Web, MonthInt, DayInt, MonthLink, EventLink, AddLink, ChannelPost, RoleAttendant, RoleHolder, LocalLink } = require('./config.json');
const client = new Discord.Client();
const fetch = require('node-fetch');
var schedule = require('node-schedule');


const fs = require("fs");
client.msgs = require(LocalLink);

//Local
z = 1;
jobz = "job"+z;
MsgDesc ="";
MsgJob = "";

//Web
date = 0;
StartDate = 0;
x = 1;
CuMonth = 7;
jobx = "job"+x;
AttRole = "";
HolRole = "";



client.on('ready', () => {
	const channel = client.channels.find(channel => channel.name === ChannelPost);
	AttRole = channel.guild.roles.find(role => role.name === RoleAttendant);
	HolRole = channel.guild.roles.find(role => role.name === RoleHolder);
	console.log('The bot is Online!');
	if(Web) {
		console.log("true");
	client.setInterval(CurrentMonth, MonthInt);
	CurrentMonth();
	client.setInterval(CurrentDay, DayInt);
	CurrentDay();
	}
	console.log('Bot has loaded successfully. We\'re in business!');
});

const CurrentMonth = () => {
	fetch(MonthLink + '.json').then(res => res.json())
	.then(json => {		 
        let body = json;
	let id = 1;
        if(!id) return console.log("supply an ID!");
        if(isNaN(id)) return console.log("supply an valid ID!");
    
        let entry = body.find(post => post.id == id);
        if(!entry) return console.log("doesnt exsist!");
	CuMonth = entry.month;
	StartDate = entry.date; //remember this one gets 1+ at the start.
	});
		
};

const CurrentDay = () => {
	NumberOfId = 0;
	date += StartDate;
	date++;
	SchID = 0;
	x = 1;
	fetch(EventLink +CuMonth+ '/' +date+ '.json').then(res => res.json())
        .then(json => {		 
        let body = json;
        for (let i = 0; i < body.length; i++) {
		NumberOfId = body[i].id;
        }	    
	//console.log(args[1]);
	let embed = new Discord.RichEmbed()
		.setColor(0xfef08d)
                .setAuthor("_Events today_","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpsQt95YxbbcQuZck3XOlfSXOhGvs9xQLrz7CUt9pRck-Opn1tlg")
	client.channels.find(channel => channel.name === ChannelPost).send({embed: embed});
	if(NumberOfId == 0) return NoEvent();
	for(j = 0; j < NumberOfId; j++){
            fetch(EventLink +CuMonth+'/'+date+'.json').then(res => res.json())
            .then(json => {		 
            let body = json;
	    SchID++;
            let id = SchID;
            console.log(id);
	    //console.log(args[1]);
            if(!id) return NoEvent();
            if(isNaN(id)) return NoEvent();
    
            let entry = body.find(post => post.id == id);
            if(!entry) return NoEvent();
	    let embed = new Discord.RichEmbed()
		.setColor(0xfef08d)
                .setAuthor("Event " + SchID,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpsQt95YxbbcQuZck3XOlfSXOhGvs9xQLrz7CUt9pRck-Opn1tlg")
		.setTitle("**__"+ entry.title +"__**")	
		.setDescription(entry.desc)		
                .addField("+--------------------------------------------------+", "Starts at:" + entry.time)
		.setFooter("Hosted by " + entry.by)
		.setTimestamp()
	    client.channels.find(channel => channel.name === ChannelPost).send({embed: embed});
	    jobx = "job"+SchID;
	    console.log(jobx);
	    console.log(entry.time);
		
	    var jobx = schedule.scheduleJob(entry.time, function(){
		    fetch(EventLink + CuMonth +'/'+ date +'.json').then(res => res.json())
	            .then(json => {		 
	            let body = json;
                    let id = x;
                    console.log(id);
                    if(!id) return EventFailed();
                    if(isNaN(id)) return EventFailed();
    
                    let entry = body.find(post => post.id == id);
                    if(!entry) return EventFailed();
		    let embed = new Discord.RichEmbed()
			.setColor(0x00AE86)
			.setAuthor("Event starting!!","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpsQt95YxbbcQuZck3XOlfSXOhGvs9xQLrz7CUt9pRck-Opn1tlg")
			.setTitle("**__" + entry.title + "__**")	
			.setDescription(" " + AttRole +" "+ entry.desc)		
			.addField("+--------------------------------------------------+", entry.reward)
			.setFooter("Hosted by " + entry.by)
			.setTimestamp()
		    client.channels.find(channel => channel.name === ChannelPost).send({embed: embed});
		    jobx.cancel();
		    x++;
		    jobx = "job"+x;
		    console.log(jobx);
	    });
	});
    });
    }
    });
};

const NoEvent = () => {
		let embed = new Discord.RichEmbed()
			.setColor(0xfef08d)
			.setAuthor("No events found!","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpsQt95YxbbcQuZck3XOlfSXOhGvs9xQLrz7CUt9pRck-Opn1tlg")
			.addField("+--------------------------------------------------+", "Go to " +AddLink+ " to add events^^")
		client.channels.find(channel => channel.name === ChannelPost).send({embed: embed});
};

const EventFailed = () => {
		let embed = new Discord.RichEmbed()
			.setColor(0xfef08d)
			.setAuthor("Event failed!!!! Look at the json formate!","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpsQt95YxbbcQuZck3XOlfSXOhGvs9xQLrz7CUt9pRck-Opn1tlg")
			.addField("+--------------------------------------------------+", "Go to " +AddLink+ " to add events^^")
			.setTimestamp()
		client.channels.find(channel => channel.name === ChannelPost).send({embed: embed});
};

var prefix = Prefix;
client.on('message', message => {
	if (message.content.startsWith(prefix)) {
		const args = message.content.slice(prefix.length).trim().split(/ +/g);
		const command = args.shift().toLowerCase();
		console.log(command);
		if (command === "help") {
			let embed = new Discord.RichEmbed()
				.setColor(0x0079a8)
				.setAuthor("Info","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpsQt95YxbbcQuZck3XOlfSXOhGvs9xQLrz7CUt9pRck-Opn1tlg")
				.setTitle("**__Command list__**")			
				.addField("addrole", "Simple command which gives you the " + RoleAttendant + " role. That pings everyone with the role when a event starts.")
				.addField("removerole", "Simple command which removes the " + RoleAttendant + " role.")
				.addField("newevent", "Command to add a new event to the bot memory (must have the " + RoleHolder + " role.\nUsage:\nReplace {text} with your actual text.\n~Event NewEvent {Id} {Title} {Description} {Start time} {Start date}\n\nExample:\n~Event NewEvent 1 Movie_night(https://www.rabb.it/) Hi guys! So, I've decided to do a movie night at about 21.00, since i'm a bit bored and have nothing to do. 21.00 22.7\n\nIf you messed up the formating of the event you'll receive a error message saying 'To few arguments! Please check the format.'.\nHowever if you did everything right you'll get '{Your tag} added a new event!', and get the pic below, in the event channel. When its 22nd july and the clock hits 21.00 the event will fire and mention everyone with the " + RoleAttendant + " role.")
				.setImage('https://wad0.000webhostapp.com/images/Event_bot/event_bot%20example.PNG')
				.setFooter("Requested by " + message.author.tag)
				.setTimestamp()
			client.channels.find(channel => channel.name === ChannelPost).send({embed: embed});
		}
		if (command === "addrole") {
			let AddAttRole = message.guild.roles.find(r => r.name === RoleAttendant);
			let member = message.mentions.members.first();
			message.member.addRole(AddAttRole).catch(console.error);
			client.channels.find(channel => channel.name === ChannelPost).send("Role added!");
		}
		if (command === "removerole") {
			let AddAttRole = message.guild.roles.find(r => r.name === RoleAttendant);
			let member = message.mentions.members.first();
			message.member.removeRole(AddAttRole).catch(console.error);
			client.channels.find(channel => channel.name === ChannelPost).send("Role removed!");
		}
		if (command.startsWith("newevent")) {
			const channel = client.channels.find(channel => channel.name === ChannelPost);
			AttRole = channel.guild.roles.find(role => role.name === RoleAttendant);
			let member = message.mentions.members.first();
			if (message.member.roles.find(role => role.name === RoleHolder)) {
				console.log("event added");
				try {
				MsgId = args[0];
				MsgTitle = args[1];	
				var FirSplit = args[args.length - 1].split(".");
				var split = args[args.length - 2].split(".");
				MsgDesc = args.slice(2, args.length - 2).join(' ')
				MsgMins = split[1];
				MsgHours = split[0];
				MsgDay = FirSplit[0];
				MsgMon = FirSplit[1];
				let embed = new Discord.RichEmbed()
					.setColor(0xfef08d)
					.setAuthor("Event just added!","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpsQt95YxbbcQuZck3XOlfSXOhGvs9xQLrz7CUt9pRck-Opn1tlg")
					.setTitle("**__"+ args[1] +"__**")	
					.setDescription(MsgDesc)		
					.addField("+--------------------------------------------------+", "Starts at:   " + MsgHours + "." + MsgMins + "________" + MsgDay + "." + MsgMon)
					.setFooter("Hosted by " + message.author.tag)
					.setTimestamp()
				client.channels.find(channel => channel.name === ChannelPost).send({embed: embed});
				let Resembed = new Discord.RichEmbed()
					.setDescription(message.author.tag + " added a new event!")
				message.channel.send({embed: Resembed});	
				} catch (e) {
				let Errembed = new Discord.RichEmbed()
					.setColor(0xf82d2d)
					.setDescription("To few arguments!   Please check the format.")
				message.channel.send({embed: Errembed});
				}
				client.msgs ["* " + MsgMins + " " + MsgHours + " " + MsgDay + " " + MsgMon + " * *"] = {
				
					author: message.author.tag,
					title: MsgTitle,
					desc: MsgDesc, 
					id: MsgId
				}
				fs.readFile(LocalLink + ".json", 'utf-8', function(err, data) {
					if (err) throw err;

					var arrayOfObjects = JSON.parse(data);
					arrayOfObjects.events.push({
						time: "* " + MsgMins + " " + MsgHours + " " + MsgDay + " " + MsgMon + " * *",
						author: message.author.tag,
						title: MsgTitle,
						desc: MsgDesc,
						id: MsgId
					})
					fs.writeFile(LocalLink + ".json", JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
						if (err) throw err;
					console.log('Done!')
					});
				});
				MsgAuthor = message.author.tag; 
				jobz = "job"+ MsgId;
				var jobz = schedule.scheduleJob("* " + MsgMins + " " + MsgHours + " " + MsgDay + " " + MsgMon + " *", function(){
					const now = new Date();
					id  = "* " + now.getMinutes() + " " + now.getHours() + " " + now.getDate() + " " + (now.getMonth()+1) + " * *";
					let entry = JSON.parse(fs.readFileSync(LocalLink + ".json")).events.find(post => post.time == id);
					z = entry.id;
					let Firembed = new Discord.RichEmbed()
						.setColor(0x00AE86)
						.setAuthor("Event starting!!","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpsQt95YxbbcQuZck3XOlfSXOhGvs9xQLrz7CUt9pRck-Opn1tlg")
						.setTitle("**__" + entry.title + "__**")	
						.setDescription(" " + AttRole +" "+ entry.desc)		
						.addField("+--------------------------------------------------+", ".")
						.setFooter("Hosted by " + MsgAuthor)
						.setTimestamp()
					client.channels.find(channel => channel.name === ChannelPost).send({embed: Firembed});
					jobz.cancel();
					jobz = "job" + z;
				
				});
				

			} else {
				let Rolembed = new Discord.RichEmbed()
					.setColor(0xf82d2d)
					.setDescription("Sorry, you need to have the " + RoleHolder + " role.")
				message.channel.send({embed: Rolembed});
			}
		}
	}
});



	    
client.login(token);