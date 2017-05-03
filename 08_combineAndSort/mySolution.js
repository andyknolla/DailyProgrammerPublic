// Write a function that takes two arrays and returns a new array with all items in alphabetical order.
//
// var array1 = [ "cat", "dog", "fish", "zebra" ],
//     array2 = [ "lion", "aardvark", "gorilla" ]
//
// combineAndSort(array1, array2);
// //-> [ "aardvark", "cat", "dog", "fish", "gorilla", "lion", "zebra" ]
//
// ## Input
//
// Two arrays (e.g [ "cat", "dog", "fish", "zebra" ] and [ "lion", "aardvark", "gorilla" ])
//
// ## Output
//
// A new array with all items in alphabetical order. (e.g. [ "aardvark", "cat", "dog", "fish", "gorilla", "lion", "zebra" ])

const comboSort = (arr1, arr2) => arr1.concat(arr2).sort();

comboSort([ "cat", "dog", "fish", "zebra" ], [ "lion", "aardvark", "gorilla" ])
