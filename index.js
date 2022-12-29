const fs = require("fs")
const cron = require("node-cron")
const tg = require("node-telegram-bot-api")
const token = process.env['token']

const music = require("./script/music")

const bot = new tg(token, { polling: true })

cron.schedule("20 13 * * *", () => {
	let json = JSON.parse(fs.readFileSync("data.json", "utf8"))
	let lists = json.threads.split(", ")
	for(let i in lists){
		console.log(i)
		bot.sendMessage(i, "sample")
	}
},{
	scheduled: true,
	timezone: "Asia/Manila"
})

bot.onText(/(.*)/, (msg) => {
	let json = JSON.parse(fs.readFileSync("data.json", "utf8"))
	const chatID = msg.chat.id
	if(!json.threads.includes(chatID)){
		json.threads += `${chatID}, `
		console.log("Added")
	}
	fs.writeFileSync("data.json", JSON.stringify(json), "utf8")
})

bot.onText(/\/music\s([\w\W]+)/i, (msg, match) => {
	const chatID = msg.chat.id
	const m = match
	music(bot, chatID, m)
})