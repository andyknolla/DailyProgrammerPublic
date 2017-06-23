function offOne(word1, word2, tolerance) {
	var matches = 0;
	word2.split('').forEach( (letter, index) => {
		if ( letter === word1[index] ) {
			matches++
		}
	})
	if( matches >= word1.length - tolerance ) {
		return true
	} else {
		return false
	}
}

module.exports = function(word, array, fuzzySearch, tolerance) {
	// handle case and whitespace
	var word = word.toLowerCase().trim();
	if(!word) return [];

  // check for partial matches
	const partialMatch = array.filter(function(name) {
		if(fuzzySearch) {
			return name.toLowerCase().includes(word);
		} else {
			return name.toLowerCase() === word;
		}
	})

	if( partialMatch.length > 0 && !fuzzySearch) return [ ...new Set(partialMatch) ];
	else if (fuzzySearch) {
		const final = array.filter( (w) => {
			return offOne( word, w.toLowerCase().trim(), tolerance );
		})
		return [ ...new Set(final) ];
	} else return [];
}
