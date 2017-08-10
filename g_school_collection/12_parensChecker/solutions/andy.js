module.exports =

function parensChecker(str) {
  if( str[0] == ')' ) {
    return false;
  }
	if(
  	str.split('').reduce( (accumulator, currentValue, index) => {
      if(accumulator < 0) return accumulator - 100;

    	if(currentValue === '(') {
      	return accumulator + 1;
      } else if(currentValue === ')') {
      	return accumulator - 1;
      }
    }, 0 ) === 0 ) {
  	return true
  }
  else return false
}
