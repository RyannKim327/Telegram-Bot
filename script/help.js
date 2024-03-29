const fs = require("fs")

module.exports = async (bot, msg, match, isReply)  => {
	const json = JSON.parse(fs.readFileSync("config.json", "utf-8"))
	let _msg = `Good day Mr/Ms. [@${msg.from.username}](tg://user?id=${msg.from.id}), I am "${json.name}". Here are the commands you may use for my service\n\n`
	for(let c = 0; c < json.commands.length; c++){
		let cmd = json.commands[c]
		if(cmd.admin == undefined){
			let tut = cmd.tut || cmd.cmd.replace("(.*)", "‹‹ query ››")
			_msg += `${cmd.title}\n- ${cmd.description}\nCommand: ${json.prefix}${tut}`
			if(c < json.commands.length - 1){
				_msg += "\n"
			}
			_msg += "\n"
		}else if(!cmd.admin){
			let tut = cmd.tut || cmd.cmd.replace("(.*)", "‹‹ query ››")
			_msg += `${cmd.title}\n- ${cmd.description}\nCommand: ${json.prefix}${tut}`
			if(c < json.commands.length - 1){
				_msg += "\n"
			}
			_msg += "\n"
		}
	}
	bot.sendMessage(msg.chat.id, _msg, {
		// "reply_to_message_id": msg.message_id,
		"parse_mode": "Markdown"
	})
}