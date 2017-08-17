module.exports =

function wordy(problem) {
  let numberStrings = problem.replace(/\s+/g, '').split('').filter( (char)=> isNaN( Number(char) ) === false );
  let numbers = numberStrings.map( (num)=> Number(num) );

  let operators = problem.replace('?','').split(' ').filter( (word)=> word==='plus' || word==='minus' || word==='multiplied' || word==='divided');

  switch(operators[0]) {
    case 'plus': return numbers[0] + numbers[1];
    default: return false;
  }
}
