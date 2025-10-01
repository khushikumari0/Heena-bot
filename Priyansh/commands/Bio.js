module.exports.config = {
	name: "bio",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
	description: "Change bot's bio",
	commandCategory: "admin",
	usages: "bio [text]",
  cooldowns: 5
  
}
  
  module.exports.run = async ({ api, event, global, args, permssion, utils, client, Users }) => {
    api.changeBio(args.join(" "), (e) => {
      if(e) api.sendMessage("an error occurred" + e, event.threadID); return api.sendMessage("MY ADMIN HAS 𝐊𝐇𝐔𝐒𝐇𝐈 𝐊𝐔𝐌𝐀𝐑𝐈 \n"+args.join(" "), event.threadID, event.messgaeID)
    }
    )
  }
