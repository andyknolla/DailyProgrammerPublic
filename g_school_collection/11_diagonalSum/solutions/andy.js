function diagonalSum(squareArray) {
	return squareArray.reduce( (sum, subarray, index) => {
  	return sum += subarray[index];
  }, 0 )
}
