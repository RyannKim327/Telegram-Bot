const fs = require("fs")
module.exports = (bot, msg, match) => {
	const json = JSON.parse(fs.readFileSync("data.json", "utf-8"))
}