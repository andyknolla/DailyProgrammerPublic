// gameOfThrees(100);
// 100 -1
//33 0
// 11 1
// 4 -1
// 1

//function one(result) {
//	if
//}

function gameOfThrees(num, prev) {
  let result, mod, output;
	if(num%3 === 0) {
    result = num/3;
    mod = 0
    if(result === 1) {  output = result + ' ' + mod; return output }
  } else if(num - 1%3 === 0) {
  	result = num -1, mod = -1, output = prev + '\n' + result + ' ', + mod;
    gameOfThrees(result, output);
  } else if(num + 1%3 === 0) {
  	result = num + 1, mod = 1;
    gameOfThress(result);
  }

}
