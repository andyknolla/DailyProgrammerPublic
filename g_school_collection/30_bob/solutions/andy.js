module.exports = function Bob () {
  return {
    hey: function(something) {
      if(something.toUpperCase()  == something && something.match(/[a-zA-Z]/) ) {
        return 'Whoa, chill out!'
      } else if (something.includes('?')) {
        return 'Sure.'
      }
      return 'Whatever.'
    }
  }
}
