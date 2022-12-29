const yt = require("youtubei.js")
const fs = require("fs")

module.exports = async (api, msg, m) => {
	let name = `${__dirname}/../temp/${msg}.mp3`
	if(fs.existsSync(name)){
		api.sendMessage(msg, "Lemme finish the earlier request please.")
	}else{
		const youtube = await new yt()
		let body = m[1]
		let result = await youtube.search(body)
		if(result.videos.length > 0){
			if(result.videos[0].id == undefined){
				api,sendMessage(msg, "Something went wrong.")
			}else{
				const info = await youtube.getDetails(result.videos[0].id)
				let title = info.title.replace(/\//gi, "")
				if(info.title == undefined){
					api.sendMessage(msg, "An Error Occured")
				}
				let file = fs.createWriteStream(`temp/${title}.mp3`)
				let message = ""
				let f = youtube.download(result.videos[0].id, {
					format: "mp4",
					quality: "tiny",
					type: "audio",
					audioQuality: "lowest",
					audioBitrate: "550"
				})
				f.pipe(file)
				f.on("end", async () => {
					/*let user = await api.getUserInfo(event.senderID)
					let username = user[event.senderID]['name']
					let firstName = user[event.senderID]['firstName']
					let g = gender(firstName)['eng']
					*/message += `Here's your requestA song entitled ${info.title}, uploaded by ${info.metadata.channel_name} on a platform called youtube.`
					try{
						api.sendMessage(msg, message)
						api.sendAudio(msg, fs.createReadStream(`temp/${title}.mp3`))
						setTimeout(() => {
							fs.unlink(`temp/${title}.mp3`, (e) => {})
						}, (60 * 1000))
					}catch(e){
						api.sendMessage(msg, e)
					}
				})
			}
		}else{
			api.sendMessage(msg, "There is no results found.")
		}
	}
}
