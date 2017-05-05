function offOne(word1, word2) {
	var matches = 0;

	word2.split('').forEach( (letter, index) => {
		if ( letter === word1[index] ) {
			matches++
		}
	})
	if( matches >= word1.length - 1 ) {
		return true
	} else {
		return false
	}
}

module.exports = function(word, array) {
	// validation: handle blank input
	if(!word) return [];

  // check for partial matches
	const partialMatch = array.filter(function(name) {
		return name.includes(word);
	})

	if( partialMatch.length > 0 ) return [ ...new Set(partialMatch) ];
	else {
		const final = array.filter( (w) => {
			return offOne(word, w);
		})
		return [ ...new Set(final) ];
	}
}
