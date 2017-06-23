var dirka = 'dirka';
var jihad = 'rakid';

function anagram(string1, string2) {
  // use array.split('') to make arrays of characters
  var string1Array = string1.split('');
  var length1 = string1Array.length;
  var string2Array = string2.split('');
  var length2 = string2Array.length;

  // loop through string1, use .includes().  For each character, check if string2 includes it.
  for (var index = 0; index < length1; index++) {
    for (var j = 0; j < length2; j++) {
      if(string1Array[index] == string2Array[j]) {
        string2Array.splice(j,1);
           console.log(string2Array);

      }

    }
  }
   console.log(string2Array);
   if (!string2Array) {
     return true;
   }
}

anagram(dirka, jihad);
