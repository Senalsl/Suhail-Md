const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/colombo";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "ture"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_00_05_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDQ1LFxuICAgICAgICAyLFxuICAgICAgICA2LFxuICAgICAgICA4MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDc4LFxuICAgICAgICA4NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTM5LFxuICAgICAgICA2NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDk2LFxuICAgICAgICA2NixcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTMsXG4gICAgICAgIDU3LFxuICAgICAgICA5NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDEsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDY5LFxuICAgICAgICA0NixcbiAgICAgICAgOTAsXG4gICAgICAgIDY5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDgwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDMzLFxuICAgICAgICAzOCxcbiAgICAgICAgMixcbiAgICAgICAgNzMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDQ4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjE2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAzOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDQ1LFxuICAgICAgICA3MixcbiAgICAgICAgMjIzLFxuICAgICAgICA0MCxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMzLFxuICAgICAgICA3LFxuICAgICAgICAxMjksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDMwLFxuICAgICAgICA1MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjAwLFxuICAgICAgICA3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTIyLFxuICAgICAgICA3OSxcbiAgICAgICAgNThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjA4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjI3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzcsXG4gICAgICAgIDQyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTY3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjA4LFxuICAgICAgICA2NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjI5LFxuICAgICAgICA0MixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDk2LFxuICAgICAgICAxODEsXG4gICAgICAgIDMzLFxuICAgICAgICAxODcsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI1LFxuICAgICAgICA2NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDUyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTE3LFxuICAgICAgICA2OCxcbiAgICAgICAgMzksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDkxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTU3LFxuICAgICAgICA3OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNixcbiAgICAgICAgMTczLFxuICAgICAgICAzMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTM5LFxuICAgICAgICA1MixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQxLFxuICAgICAgICA3NixcbiAgICAgICAgMjA2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTA3LFxuICAgICAgICA5MCxcbiAgICAgICAgODUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDU4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDcwLFxuICAgICAgICAyNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDgwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDExNixcbiAgICAgICAgNjcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTMxLFxuICAgICAgICA5NixcbiAgICAgICAgMTA2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjksXG4gICAgICAgIDM0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJBSTV4L2Q5Szh6eit0WWlYUm5CM2ZGWTFVL3lEcVFrOGJ4TlFxdkl0NEpNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJWdzR5VTA5OFJwR0pKWTVHU25MRkNRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjdjYWNlN2I2LTk5YjYtNDZmMy1iMjk2LTUwYTEwNjJkYWJkMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzNyxcbiAgICAgIDgzLFxuICAgICAgMjM4LFxuICAgICAgMjIxLFxuICAgICAgODcsXG4gICAgICAyNTQsXG4gICAgICAxMjEsXG4gICAgICAxMSxcbiAgICAgIDIyMixcbiAgICAgIDgyLFxuICAgICAgODksXG4gICAgICAzNSxcbiAgICAgIDEsXG4gICAgICAxMTUsXG4gICAgICAyMTksXG4gICAgICAxNjMsXG4gICAgICAxMSxcbiAgICAgIDY4LFxuICAgICAgOTIsXG4gICAgICAxNzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAxLFxuICAgICAgMTIsXG4gICAgICA2MixcbiAgICAgIDE4MSxcbiAgICAgIDgwLFxuICAgICAgMTc3LFxuICAgICAgMTM3LFxuICAgICAgMTc1LFxuICAgICAgNzYsXG4gICAgICA2MCxcbiAgICAgIDEyNCxcbiAgICAgIDIwOSxcbiAgICAgIDI1NCxcbiAgICAgIDEyMCxcbiAgICAgIDIzMSxcbiAgICAgIDIxNixcbiAgICAgIDE1MixcbiAgICAgIDE3MSxcbiAgICAgIDExNSxcbiAgICAgIDk5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk1CRFE3TkpQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc4NDY2Njc4MjoyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTcyNDgxNzQyNjUxNDk4OjI5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ00yODZwWUZFUGFsNUxJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaXhCd3d0QzlTOEw3OHpMMkR0blFpeWZxbmZNSERGVURYSkxQbExBdU1WMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJwV1lRRXFsNHJUV25iWmJCdG9yb1FwQkJvTVUvanFjYVdlRTd0Uy9LQlhDWjNKdjVxWDZkMitSY0MwTExEeDVSV0RsS2hpV0llemw4bzNXVmRpOUlDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIxUXZqclQ4ZC9TZjhoSmY3bEhTc294MkY4V1lFbC9nOUpSVXEzMWl1Q3N6bllXc21JWmFjWUIzV0pEUStmdU1NeCt2Y0x2cEZid2FMVHp6MElyMFpnUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc4NDY2Njc4MjoyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNzExMzU5NFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Senesh㋡",
  ownername:process.env.OWNER_NAME|| "Senesh_Cm〠",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
