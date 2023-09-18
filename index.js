const fs = require("fs")
const re = require("./utils/regex")
const tg = require("node-telegram-bot-api")
const token = process.env['token']

const bot = new tg(token, { polling: true })

let start = () => {
	const files = JSON.parse(fs.readFileSync("config.json", "utf-8"))
	const command = files.commands
	for(let c = 0; c < command.length; c++){
		const cmd = command[c]
		let isReply = cmd.isReply || false
		if(isReply){}else{
			bot.onText(re(files.prefix, cmd.cmd), (msg, match) => {
				const com = require(`./script/${cmd.file}`)
				com(bot, msg, match)
			})
		}
	}
	setInterval(() => {
		console.log("UWU")
	}, 10000)
}

start()