module.exports = {
  inEnglish: function(num) {   // 3
  // single digits

  if(String(num).split('').length === 1) {
    return digits(num);
  }
  // 2 digits

  // hundreds...

  // thousands
  }
}

function digits(aNum) {
  var singles = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine'
  }
  return singles[aNum]
}
// ['zero', 'one', 'two']
