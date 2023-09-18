module.exports = (bot, msg, match) => {
	bot.sendMessage(msg.chat.id, "I'm still alive.", {
		"reply_to_message_id": msg.message_id
	})
}