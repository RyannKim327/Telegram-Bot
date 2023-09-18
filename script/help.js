const fs = require("fs")

module.exports = async (bot, msg, match)  => {
	const json = JSON.parse(fs.readFileSync("./../config"))
	
	bot.sendMessage(msg.chat.id, "Test Help")
}