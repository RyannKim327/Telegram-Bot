const fs = require("fs")
const re = require("./utils/regex")
const tg = require("node-telegram-bot-api")
const { brotliDecompress } = require("zlib")
const token = "6406000437:AAEwBYcrGfzVc9z9pEAoth7VKP77UdVeUp8"// process.env['token']

const bot = new tg(token, { polling: true })

let start = async () => {
	const files = JSON.parse(fs.readFileSync("config.json", "utf-8"))
	const command = files.commands
	let willBreak = false
	for(let c = 0; c < command.length; c++){
		const cmd = command[c]
		let isReply = false
		if(!willBreak){
			bot.onText(re(files.prefix, cmd.cmd.trim()), (msg, match) => {
				const com = require(`./script/${cmd.file}`)
				com(bot, msg, match, )
				willBreak = true
			})
		}
		if(willBreak){
			break
		}
	}
	bot.on("message", (msg) => {
		bot.sendMessage(msg.chat.id, msg.from.id)
	})
	setInterval(() => {
		console.log("UWU")
	}, 10000)
}

start()