const fs = require("fs")
const cron = require("node-cron")

const gateway = require("biblegateway-scrape")

const tg = require("node-telegram-bot-api")
const token = process.env['token']

const bot = new tg(token, { polling: true })

let start = () => {
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

	const files = JSON.parse(fs.readFileSync("commands.js", "utf-8"))
	const command = files.commands
	for(let c = 0; c < command.length; c++){
		const cmd = command[c]

	}

}
start()