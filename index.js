const fs = require("fs")
const cron = require("node-cron")
const tg = require("node-telegram-bot-api")
const token = process.env['token']

const bot = new tg(token, { polling: true })

let start = () => {
	const files = JSON.parse(fs.readFileSync("commands.js", "utf-8"))
	const command = files.commands
	for(let c = 0; c < command.length; c++){
		const cmd = command[c]
		let isReply = cmd.isReply || false
		if(isReply){}else{
			bot.onText()
		}
	}

}
start()