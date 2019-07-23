# Event_Bot
.

However this is a public bot, which means that every server that this bot is in will be able to join your event. This is both good and bad. But if you want to host events for just your server, then you have to host the bot on your own(Self Hosting).

## Features
- Announces users that join (configurable message)
- Alerts server owner when a user joins
- Keeps track of users' ranks (similar to Mee6)
- Other stuff, too lazy to type it up.

### Self Hosting

SO YOU DONT WANNA SHARE YOUR SERVER EVENTS?????
Do you know what self hosting means? It basically mean you have to host it on your computer/server where the bot is always running (console window open). If the bot goes offline, you have to get it online again and take the 
consequences of eraesed events... Anyway lets jump into how to get it up and running.

#### 1. Nodejs
Be sure you have installed Nodejs(https://nodejs.org/en/), if not the bot wont work.

#### 2. Download Zip
Download the folder Event_Bot with all the containing files and extract the zip file.
<img>[![Github Download](https://wad0.000webhostapp.com/images/Event_bot/Github_download.PNG)](https://wad0.000webhostapp.com/images/Event_bot/Github_download.PNG)

#### 3. Config json
<img>[![Event config](https://wad0.000webhostapp.com/images/Event_bot/Event_config.PNG)](https://wad0.000webhostapp.com/images/Event_bot/Event_config.PNG)

This file contains everything you need to mess with. Lets take each line.
--------------------------------------------------------------------------



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

I hope that wasnt to confusing^^
--------------------------------------------------------------------------

## Join Me
<img>[![Discord Badge](https://github.com/Rayzr522/ProjectResources/raw/master/RayzrDev/badge-small.png)](https://discord.io/rayzrdevofficial)
