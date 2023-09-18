const bible = require("biblegateway-scrape")

module.exports = async (bot, msg, match) => {
	let lists = {
		"1905": a.version.TAG_ANG_DATING_BIBLIYA_1905,
		"1978": a.version.TAG_ANG_BIBLIA_1978,
		"2001": a.version.TAG_ANG_BIBLIA_2001,
		"snd": a.version.TAG_ANG_SALITA_NG_DIYOS,
		"niv": a.version.ENG_NEW_INTERNATIONAL_VERSION,
		"esv": a.version.ENG_ENLISH_STANDARD_VERSION,
		"kjv": a.version.ENG_KING_JAMES_VERSION,
		"nlt": a.version.ENG_NEW_LIVING_TRANSLATION,
		"b1905": a.version.BAYBAYIN_ANG_DATING_BIBLIYA_1905,
		"b1978": a.version.BAYBAYIN_ANG_BIBLIA_1978,
		"b2001": a.version.BAYBAYIN_ANG_BIBLIA_2001,
		"bsnd": a.version.BAYBAYIN_ANG_SALITA_NG_DIYOS
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
	let v = lists_version["1905"]
	if(match[2] != undefined){
		if(lists_version[match[1]] != undefined){
			v = 
		}
	}
	let verse = bible.verse()
}