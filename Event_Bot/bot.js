const Discord = require("discord.js");
const { token, Prefix, MonthInt, DayInt, MonthLink, EventLink, AddLink, ChannelPost, RoleAttendant, RoleHolder } = require('./config.json');
const client = new Discord.Client();
const fetch = require('node-fetch');
var schedule = require('node-schedule');
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
	client.setInterval(CurrentMonth, MonthInt);
	CurrentMonth();
	client.setInterval(CurrentDay, DayInt);
	CurrentDay();
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
		if (message.content === prefix + " addrole") {
			let AddAttRole = message.guild.roles.find(r => r.name === RoleAttendant);
			let member = message.mentions.members.first();
			message.member.addRole(AddAttRole).catch(console.error);
			client.channels.find(channel => channel.name === ChannelPost).send("Role added!");
		}
		if (message.content === prefix + " removerole") {
			let AddAttRole = message.guild.roles.find(r => r.name === RoleAttendant);
			let member = message.mentions.members.first();
			message.member.removeRole(AddAttRole).catch(console.error);
			client.channels.find(channel => channel.name === ChannelPost).send("Role removed!");
		}
			

});



	    
client.login(token);