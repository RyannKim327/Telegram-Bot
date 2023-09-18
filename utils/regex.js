module.exports = (prefix, pattern) =>{
	if(prefix == "/"){
		prefix = "\\/"
	}
	return new RegExp(`${prefix}${pattern}`)
}