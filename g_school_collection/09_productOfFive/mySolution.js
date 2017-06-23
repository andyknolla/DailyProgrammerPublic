// 127289373913828309127381263, => 3024

function highest(num) {
  let split = previous.toString().split('') // ['1', '2', '7', '2', '8'...]
  const groups = [];
  for(var i=0;i<groups.length-5;i++) {
    groups.push(groups.substr(i,5)) // groups = [['1', '2', '7', '2', '8'], ['9', '3', '7', '3', '9'],
  }


  // const products = groups.map((group) => {
  //   return groups.map((number) => {
  //
  //   })
  // })

  return groups.reduce((previous, current) => {
    return current.reduce((prevNum, currentNum) => {    // array of numbers that are products of groups of 5
      return prevNum * currentNum;
    }, 1)

    previous > current ? previous : current             // compares each number with the previous high
  }, 0)

}

highest(127289373913828309127381263)  // 3024
