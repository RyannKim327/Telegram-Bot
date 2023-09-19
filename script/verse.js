const bible = require("biblegateway-scrape")

module.exports = async (bot, msg, match, isReply) => {
	let lists = {
		"1905": bible.version.TAG_ANG_DATING_BIBLIYA_1905,
		"1978": bible.version.TAG_ANG_BIBLIA_1978,
		"2001": bible.version.TAG_ANG_BIBLIA_2001,
		"snd": bible.version.TAG_ANG_SALITA_NG_DIYOS,
		"niv": bible.version.ENG_NEW_INTERNATIONAL_VERSION,
		"esv": bible.version.ENG_ENLISH_STANDARD_VERSION,
		"kjv": bible.version.ENG_KING_JAMES_VERSION,
		"nlt": bible.version.ENG_NEW_LIVING_TRANSLATION,
		"b1905": bible.version.BAYBAYIN_ANG_DATING_BIBLIYA_1905,
		"b1978": bible.version.BAYBAYIN_ANG_BIBLIA_1978,
		"b2001": bible.version.BAYBAYIN_ANG_BIBLIA_2001,
		"bsnd": bible.version.BAYBAYIN_ANG_SALITA_NG_DIYOS
	}
	let lists_version = {
		"1905": "ANG DATING BIBLIYA 1905",
		"1978": "ANG BIBLIA 1978",
		"2001": "ANG BIBLIA 2001",
		"snd": "ANG SALITA NG DIYOS",
		"niv": "NEW INTERNATIONAL VERSION",
		"esv": "ENGLISH STANDARD VERSION",
		"kjv": "KING JAMES VERSION",
		"nlt": "NEW LIVING TRANSLATION",
		"b1905": "ANG DATING BIBLIYA 1905 (Baybayin)",
		"b1978": "ANG BIBLIA 1978 (Baybayin)",
		"b2001": "ANG BIBLIA 2001 (Baybayin)",
		"bsnd": "ANG SALITA NG DIYOS (Baybayin)"
	}
	let v = lists["1905"]
	let m = match[2]
	if(lists[match[1]] != undefined){
		v = lists[match[1]]
	}
	let verse = await bible.verse(m, v)
	let ve = ""
	for(let c = 0; c < verse.length; c++){
		ve += `${verse[c].book}\n${verse[c].verse}\n`
	}
	bot.sendMessage(msg.chat.id, `Bible verse requested\n\n${ve}`)
}