const fs = require("fs")

module.exports = async (bot, msg, match)  => {
	const json = JSON.parse(fs.readFileSync("config.json", "utf-8"))
	let msg = `Good day Mr/Ms. @${msg.chat.username}, I am "${json.name}". Here are the commands you may use for my service\n\n`
	for(let c = c < json.commands.length; c++){
		let cmd = json.commands[c]
		msg += `${cmd.title}\n- ${cmd.description}\nCommand: ${json.prefix}${cmd.cmd}`
		if(c < json.commands.length - 1){
			msg += "\n"
		}
		msg += "\n"
	}
	bot.sendMessage(msg.chat.id, msg)
}