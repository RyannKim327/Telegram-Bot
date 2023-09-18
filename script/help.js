const fs = require("fs")

module.exports = async (bot, msg, match)  => {
	const json = JSON.parse(fs.readFileSync("config.json", "utf-8"))
	let msg = `Good day Mr/Ms. @${msg.chat.username}`
	bot.sendMessage(msg.chat.id, "Test Help")
}