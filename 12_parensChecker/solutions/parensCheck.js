function parensChecker(parens) {

  var anArray = parens.split('');
  console.log(anArray);
  var first = anArray[0];
  console.log(first);
  var last = anArray[anArray.length - 1]
  console.log(last);
  var trash = [];

  for (i=anArray.length; i > 1;i--){

  if (first === '(' && anArray[1] === ')') {
    trash = anArray.shift();
    trash = anArray.shift();
  } else if (first === '(' && last === ')') {
    trash = anArray.shift();
    trash = anArray.pop();
  }
  else return false;
}
}

parensChecker('()(((())))');
parensChecker('())))(');
parensChecker(')(');

module.exports = parensChecker;
