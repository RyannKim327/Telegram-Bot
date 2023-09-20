const fs = require("fs")
module.exports = (bot, msg, match) => {
	const json = JSON.parse(fs.readFileSync("data.json", "utf-8"))
	if(json.subscribe.includes(bot.chat.message_thread_id)){
		bot.sendMessage(msg.chat.id, "This thread is already added.")
	}else{
		json.subscribe += bot.chat.message_thread_id
		bot.sendMessage(msg.chat.id, "This thread is now subscribed to a special feature.")
	}
}