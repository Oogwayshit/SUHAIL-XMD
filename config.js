const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348107940664";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_02_10_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDczLFxuICAgICAgICAxOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTcxLFxuICAgICAgICA3MixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE0LFxuICAgICAgICAxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE4LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDQ1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQzLFxuICAgICAgICA5MixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjA4LFxuICAgICAgICA4NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzLFxuICAgICAgICA5OSxcbiAgICAgICAgNTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzksXG4gICAgICAgIDE5LFxuICAgICAgICA0MixcbiAgICAgICAgNDgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjksXG4gICAgICAgIDYsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDU4LFxuICAgICAgICA5OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTksXG4gICAgICAgIDYxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDQyLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDQxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAzLFxuICAgICAgICA3OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDUsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDc5LFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDk5LFxuICAgICAgICAzNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDM0LFxuICAgICAgICAxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjEsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYxLFxuICAgICAgICA0OCxcbiAgICAgICAgMjA4LFxuICAgICAgICA4OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDksXG4gICAgICAgIDUxLFxuICAgICAgICAxNzksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjM3LFxuICAgICAgICA0MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjIwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTI1LFxuICAgICAgICA4NixcbiAgICAgICAgMTU1LFxuICAgICAgICAzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxLFxuICAgICAgICAzNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTgwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDg4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDMwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjksXG4gICAgICAgIDE3NixcbiAgICAgICAgNjYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzUsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExNyxcbiAgICAgICAgODUsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDk2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlczWkc3dmRDZEl0azVoZDFKSld4R3dKcTBIajdYMlp4UHU0R20rYS8yQk09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODEwNzk0MDY2NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiODBEQzZDQkMzMkYxNjM3OTgzQUJBOUI4NzQ3MjQ1QkFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMwMTEzMzQxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODEwNzk0MDY2NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTE0OUI2MUIwNzQ2MzZBMkY2MkQ5N0NDMzNCQjhFQzNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMwMTEzMzQxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImNWODRkeXlIU0kyVmhpbUV1aUZIM1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiZGI5MWU3YjQtYmExYi00ZDFhLTkyNDktMzVmZmI2Y2UwNTMyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIsXG4gICAgICA1OCxcbiAgICAgIDEzLFxuICAgICAgMTg2LFxuICAgICAgOCxcbiAgICAgIDEwMSxcbiAgICAgIDE0LFxuICAgICAgMzMsXG4gICAgICA5LFxuICAgICAgNDgsXG4gICAgICAyMDcsXG4gICAgICAxMTksXG4gICAgICAxMjIsXG4gICAgICAyMzUsXG4gICAgICAyMjcsXG4gICAgICAyMSxcbiAgICAgIDE2NCxcbiAgICAgIDE5NixcbiAgICAgIDkzLFxuICAgICAgMTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI4LFxuICAgICAgMTYzLFxuICAgICAgMTEzLFxuICAgICAgMTQsXG4gICAgICAxODQsXG4gICAgICAyMzEsXG4gICAgICAxMTAsXG4gICAgICAxODIsXG4gICAgICA3MSxcbiAgICAgIDEyOCxcbiAgICAgIDg4LFxuICAgICAgMjEsXG4gICAgICAxMTQsXG4gICAgICAxODUsXG4gICAgICAxMzAsXG4gICAgICA4NSxcbiAgICAgIDE1OCxcbiAgICAgIDE4NCxcbiAgICAgIDM0LFxuICAgICAgNDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWjYyWk5TVlRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMDc5NDA2NjQ6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiOTc4Njk4MDU2NzA2NDM6OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLckU0N3NGRUxQZS9iZ0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlNVR0pTbmlqUURlRVZqZmRHODE3RmdqTVBRMW4xeUNDOVMzbVNHMjJZbWM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSG0rYkhkOHVGNVRlUTNNc21kV1V2NEtKZlpvM1k2WEk2cmFpTjNEMGVHQm4wZTFtdHNoQmcySWJoL0NVd09oK2REWitHTGw1K3dhSUUwRkFIWUpFQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUGdoQzg5aXpieGhXWG1rVFBQcUwzL3JRWUZTNEdmQTh3ZGg2Ui9CWUhhSHExQXBJWVpCWmIzb0ZKVWVnTTdkTlVhVnVrSHp6WDdqK05CYjJRY2FQQ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEwNzk0MDY2NDo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDExMzMzNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZqTFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRmpMLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZWdzSSsyczZza2x0RHpJQ0EwdXEyR2pPMjNKS1pnRzB6OHVZSU54UENidz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDY3NTQwMDEwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzAxMTMzMzg4NjhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
