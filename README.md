# Event_Bot
.

However this is a public bot, which means that every server that this bot is in will be able to join your event. This is both good and bad. But if you want to host events for just your server, then you have to host the bot on your own(Self Hosting).

## Features
- Manage events (configurable config file)
- Alerts of events starting (configurable time and date)

### Self Hosting

SO YOU DONT WANNA SHARE YOUR SERVER EVENTS?????
Do you know what self hosting means? It basically mean you have to host it on your computer/server where the bot is always running (console window open). If the bot goes offline, you have to get it online again and take the 
consequences of eraesed events... Anyway lets jump into how to get it up and running.


#### 1. Nodejs
Be sure you have installed Nodejs(https://nodejs.org/en/), if not the bot wont work.


#### 2. Download Zip
Download the folder Event_Bot with all the containing files and extract the zip file.
<img>[![Github Download](https://wad0.000webhostapp.com/images/Event_bot/Github_download.PNG)](https://wad0.000webhostapp.com/images/Event_bot/Github_download.PNG)


#### 3. Set up roles and channel
This bot post the events to a specific channel, so make a new one dedicated to this or use a already exsiting one. However adding events and role management are done anywhere. 


Make a role so the bot can ping events thats starting.

Make a role so the bot can manage who can add events.


#### 4. Config json
<img>[![Event config](https://wad0.000webhostapp.com/images/Event_bot/Event_config.PNG)](https://wad0.000webhostapp.com/images/Event_bot/Event_config.PNG)

This file contains everything you need to mess with. Lets take each line.

/--------------------------------------------------------------------------\



Token: here you put your bot token.

Prefix: here is the prefix for the bot, as default this is set to '~Event'.

Web: This is probably on of the things thats easy to forget. This sud only be 'true' or 'false' nothing else! It just want to know if the bot is gonna use a web server or not. Head down to Webserver() if you want to read more.

MonthInt: if you set Web to false this point doesnt matter, just leave it as default.

DayInt: Same as MonthInt leave default of web is false.

MonthLink: Leave blank as "" if Web is false.

DayLink: Leave blank as "" if Web is false.

AddLink: Leave as default if web is false.

ChannelPost: Where should the bot post the events at? This must be a channel name.

RoleAttendat: The role which gets pinged on event starts, It will also remove and add this role on command. Do (prefix help) for command list. This must be a role name.

RoleHolder: Only persons with this role will be able to add a new event. This must be a role name.

LocalLink: To the a local event file so the bot can write and read events to it from the chat.

\--------------------------------------------------------------------------/

I hope that wasnt too confusing^^


#### 5. Done?
If you did everything above you could try open the start_bot.bat. Getting 'The bot is Online!' and 'Bot has loaded successfully. We\'re in business!' means that the bot is ready to do its part. However if you get a error, take a look above again or ask me^^


### Using Web server
This is the best way to use the bot, beacuse without a webserver all events are saved as memory in the bot. So on restart or crash all events will be eraesed. However with a webserver you will only lose 1 day at most. The bad part about this is that it takes more time to set up, and you have to use everything in the config file. 

Warning: You might get frustrated :(

First of all you need to have an reachable webserver online. 

## Join Me
<img>[![Discord Badge](https://github.com/Rayzr522/ProjectResources/raw/master/RayzrDev/badge-small.png)](https://discord.io/rayzrdevofficial)
