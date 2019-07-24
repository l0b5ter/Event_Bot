# Event_Bot
The Event_bot allows you to set up upcoming events in your server and then notify your members of those events when they happen!

However this is a public bot, which means that every server that this bot is in will be able to join your event. This is both good and bad. But if you want to host events for just your server, then you have to host the bot on your own(Self Hosting).

## Features
- Manage events
- Alerted by events starting (configurable time and date)
- Highly configurable config file

### Self Hosting

So, dont you want to share your server events?????
Do you know what self hosting means? It basically means you have to host it on your computer/server where the bot is always running (console window open). If the bot goes offline, you have to get it online again and take the 
consequences of erased events... Anyway lets jump into how to get it up and running.


#### 1. Nodejs
Be sure you have installed Nodejs(https://nodejs.org/en/). If not, the bot wont work.


#### 2. Download Zip
Download the folder Event_Bot with all the containing files and extract the zip file.
<img>[![Github Download](https://wad0.000webhostapp.com/images/Event_bot/Github_download.PNG)](https://wad0.000webhostapp.com/images/Event_bot/Github_download.PNG)


#### 3. Set up roles and channel
This bot posts the events to a specific channel, so make a new one dedicated to this or use a already exsiting one. However adding events and role management are done anywhere. 


Make a role so the bot can ping events thats starting.

Make a role so the bot can manage who can add events.


#### 4. Config json
<img>[![Event config](https://wad0.000webhostapp.com/images/Event_bot/Event_configEm.PNG)](https://wad0.000webhostapp.com/images/Event_bot/Event_configEm.PNG)

This file contains everything you need to mess with. Lets take each line.

/--------------------------------------------------------------------------\



Token: here you put your bot token.

Prefix: here is the prefix for the bot, as default this is set to '~Event'.

Web: This is probably on of the things thats easy to forget. This sud only be 'true' or 'false' nothing else! It just wants to know if the bot is gonna use a web server or not. Head down to Webserver() if you want to read more. Set to false if not using web server.

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

I hope that wasn't too confusing^^


#### 5. Done?
If you did everything above you could try open the start_bot.bat. Getting 'The bot is Online!' and 'Bot has loaded successfully. We\'re in business!' means that the bot is ready to do its part. However if you get a error, take a look above again or ask me^^


### Using Web server
This is the best way to use the bot, because without a webserver all events are saved as memory in the bot. So on restart or crash all events will be erased. However with a webserver you will only lose 1 day at most. The bad part about this is that it takes more time to set up, and you have to use everything in the config file. 

Warning: You might get frustrated :(

First of all you need to have an reachable online webserver, ok?

#### Config json
<img>[![Event configEm](https://wad0.000webhostapp.com/images/Event_bot/Event_config1.PNG)](https://wad0.000webhostapp.com/images/Event_bot/Event_config1.PNG)

/--------------------------------------------------------------------------\



Web: Instead of setting this to 'false', set it to 'true' this time. (Now the bot will try to grab the events from your webserver).

MonthInt: This defines how often it checks the online month.json file. This contains the current month and which day it sud start at. You have to change the month variable each month.

DayInt: This defines how long 1 day is. After that it tries to grab the next day events. (set as miliseconds as int). Default: 86400000

MonthLink: This is the adresse link to where your Month.json file are.

DayLink: Adresse link to where the bot sud start looking for the events. (from code: EventLink + CuMonth +'/'+ date +'.json').

AddLink: When the bot doesn't find any events on the current day, it will post a embed with a link where you could add more events. Here you put this link to add events.

\--------------------------------------------------------------------------/


#### Folders
<img>[![Event Files1](https://wad0.000webhostapp.com/images/Event_bot/Event_files1.PNG)](https://wad0.000webhostapp.com/images/Event_bot/Event_files1.PNG)

Where the folders (red square around) is the months in numbers, and the json file is your Month.json file (MonthLink).

<img>[![Event Files2](https://wad0.000webhostapp.com/images/Event_bot/Event_files2.PNG)](https://wad0.000webhostapp.com/images/Event_bot/Event_files2.PNG)

Inside each month numbers theres all the days.

#### Month.json
<img>[![Event month](https://wad0.000webhostapp.com/images/Event_bot/Event_month.PNG)](https://wad0.000webhostapp.com/images/Event_bot/Event_month.PNG)

Here you put the current month and which day it is.

#### Done?
If it successfully manages to grab the events from your web server, you've done well. Only left is to set up a proper page for adding events (Php?). Just ask if you wanna see why page or need help^^

### Next update
- Instead of saving events to local file from the chat, use save to webserver.
- Backup of bot memory
- Easier web server setup and management

## Join Me
<img>[![DiscordLink](https://wad0.000webhostapp.com/images/Logo_WiAD.png)](https://discord.io/JrHcNuE)
