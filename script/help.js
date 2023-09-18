const fs = require("fs")

module.exports = async (bot, msg, match)  => {
	const json = JSON.parse(fs.readFileSync("config.json", "utf-8"))
	let _msg = `Good day Mr/Ms. @${msg.chat.username}, I am "${json.name}". Here are the commands you may use for my service\n\n`
	for(let c = 0; c < json.commands.length; c++){
		let cmd = json.commands[c]
		_msg += `${cmd.title}\n- ${cmd.description}\nCommand: ${json.prefix}${cmd.cmd}`
		if(c < json.commands.length - 1){
			_msg += "\n"
		}
		_msg += "\n"
	}
	bot.sendMessage(msg.chat.id, _msg)
}