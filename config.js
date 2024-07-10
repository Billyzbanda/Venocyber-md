//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "255742862266";
global.owner = process.env.OWNER_NUMBER || "255742862266";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0ZxVjhpNHoraklFM21PTkg1ekxSNUJmSnFmQ2hHQ20xYzJvVmxBTUZIZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY1pXbWhVa1VUZXNQc1F2WkRmUUp3bCtpeUU5SnZ4a0NpcGVLTjZsa1JERT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjQU9DOGtkTFpaM1NJSDNyVitFWHlxd1l4LzREdnZRRjl0UmZpMllDRmtZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtSHc4eWhZbTJsMG4zTkVmZS9RbFpKakg4WS9jbGZkcFQyMUlGdUt5bVgwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFPOVFlcTVwVUdBcUx0bk52bVJoSm5yb3NETmlXMkNPRmRkMi9Wa0ZEbXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhldjQ1dVFnTlZFTHlNR1hFaUxnYUIvdk9weSswc1RuSDA4RUJLZmNxRkE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU8xMmZkNjlWTHcxajRRMnE3VDlIZzNqVWpSV1piVjV1Vmo5SEJBd1dGUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0g5Wk5xanplZjJiYXlFazZwZlVQU3h3NkVZRlFST0V5RmtmTlVpMFd4QT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRHSVhnRkdFbnQvZUJvNkpHY0crMXVpUzlydGFwcndnMU1rS2czS1pFOTJQQVFSQUVzSmd1SW8vNkg4M1dXVkUwRFNNb3BLM1pyeFpNZzlwdkpFS0RRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEwLCJhZHZTZWNyZXRLZXkiOiJNVlFoTm43cTFnVXJiZjk1TUJOTXRDaEFyaDJRK0E4M3dJYkRjY3R4SytNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI5R1BpbFJGYlJQR0tTVzZpbmlXZURRIiwicGhvbmVJZCI6IjdjMGVlNjMxLTlmYmQtNGJhMi05Njg3LWE3NDc4MTRhZDJmMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRVERzcW8xTDVtbkJSYTY4SjVPbDRDaWtHd009In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYkJMZDRzYURyd09qVGxPa2lnTU9qMEt5MHd3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ilg5UkVRMVA0IiwibWUiOnsiaWQiOiIyNjA3NzAzMDUzMzM6MTJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiR29kZnJleSBTdG9yZXMifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pYYngvVUVFSWpqdWJRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlpISlRWQmJPVGxSRlJ2NmE3dHNNR3JXUXgxQ1ZZcGY1Y1JGKzJsR01rams9IiwiYWNjb3VudFNpZ25hdHVyZSI6InlWcXRzczI1aEd6alNEbUVFWDVKK1BNODlVeFVoK1lGd0cvQjJvcGRJTS9BdllRYkkwSnNWY0o1dUdYcXNpY1JZNk0waCtqQ0tPSVFBSVZxK0JQVUNBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIvMHUyMDNINkVJZkZDdzBld0RPazV5NWJ6VmFMMks2QVZ3OTJzUXFyTENzOEs3d2w1MnZHTjR6b0IvS0F5bm53aWpTMHJlYkJmTU8yZHg3eko2bFpEZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2MDc3MDMwNTMzMzoxMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXUnlVMVFXems1VVJVYittdTdiREJxMWtNZFFsV0tYK1hFUmZ0cFJqSkk1In19XSwicGxhdGZvcm0iOiJzbWJpIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwNjExMjIwfQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "VENOCYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "VENOCYBER",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
