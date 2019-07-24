# Event_Bot
.

However this is a public bot, which means that every server that this bot is in will be able to join your event. This is both good and bad. But if you want to host events for just your server, then you have to host the bot on your own(Self Hosting).

## Features
- Manage events
- Alert by events starting (configurable time and date)
- High configurable config file

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
<img>[![Event config](https://wad0.000webhostapp.com/images/Event_bot/Event_configEm.PNG)](https://wad0.000webhostapp.com/images/Event_bot/Event_configEm.PNG)

This file contains everything you need to mess with. Lets take each line.

/--------------------------------------------------------------------------\



Token: here you put your bot token.

Prefix: here is the prefix for the bot, as default this is set to '~Event'.

Web: This is probably on of the things thats easy to forget. This sud only be 'true' or 'false' nothing else! It just want to know if the bot is gonna use a web server or not. Head down to Webserver() if you want to read more. Set to false if not using web server.

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

First of all you need to have an reachable online webserver. 
ok?

#### Config json
<img>[![Event configEm](https://wad0.000webhostapp.com/images/Event_bot/Event_config1.PNG)](https://wad0.000webhostapp.com/images/Event_bot/Event_config1.PNG)

/--------------------------------------------------------------------------\



Web: Instead of setting this to 'false', set it to 'true' this time. (Now the bot will try to grab the events from your webserver).

MonthInt: This defines how often it checks the online month.json file. This contains the current month and which day it sud start at. You have to change the month variable each month.

DayInt: This defines how long 1 day is. After that it tries to grab the next day events. (set as miliseconds as int). Default: 86400000

MonthLink: This is the adresse link to where your Month.json file are.

DayLink: Adresse link to where the bot sud start looking for the events. (from code: EventLink + CuMonth +'/'+ date +'.json').

AddLink: When the bot doesnt find any events on the current day, it will post a embed with a link where you could add more events. Here you put this link to add events.

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
If it succesful manages to grab the events from your web server, you've done well. Only left is to set up a proper page for adding events (Php?). Just ask if you wanna see why page or need help^^

### Next update
- Instead of saving events to local file from the chat, use save to webserver.
- Backup of bot memory
- Easier web server setup and management

## Join Me
<img>[![DiscordLink](data:image/png;base64,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)]((https://discord.io/JrHcNuE)
