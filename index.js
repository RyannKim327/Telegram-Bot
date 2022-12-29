const fs = require("fs")
const cron = require("node-cron")

const gateway = require("biblegateway-scrape")

const tg = require("node-telegram-bot-api")
const token = process.env['token']

const music = require("./script/music")

const bot = new tg(token, { polling: true })

let start = () => {
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

	cron.schedule("20 21 * * *", async () => {
		let json = JSON.parse(fs.readFileSync("data.json", "utf8"))
		let lists = json.threads.split(", ")
		console.log(lists)
		let tlb = await gateway.dailyVerse(gateway.version.TAG_ANG_DATING_BIBLIYA_1905)
		setTimeout(() => {
			for(let i = 0; i < lists.length - 1; i++){
				bot.sendMessage(lists[i],  `Bible verse of the day test:\n${tlb[0].book}\n${tlb[0].verse}\n\n`)
			}
		}, 5000)
	},{
		scheduled: true,
		timezone: "Asia/Manila"
	})
}
start()