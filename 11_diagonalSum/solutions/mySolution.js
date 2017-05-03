const diagonalSum = (squareArray) => {
  let sum = 0;
	for(let i=0;i<squareArray.length;i++) {
		sum = sum + squareArray[i][i]
	}
	return sum;
}

 diagonalSum(square4) // => 4

 diagonalSum(square5) // => 19
