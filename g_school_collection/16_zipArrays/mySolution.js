# Zip Arrays

Implement a function which takes two parameters, both of which are arrays, and zips them together.

ie: The arguments are [1,2,3], and [4,5,6], and after zipping the two arrays, you return [1,4,2,5,3,6].

# Inputs

2 Arrays
```js
zipArrays([1,2,3], [4,5,6]);
```

# Outputs

1 Array - result of zipping the 2 arrays

```sh
[1,4,2,5,3,6]
```
var short = [1,2,3];
var long = [5,6,7,8,9];
var length;
function zip(array1, array2) {
  var zippedArray = [];
  length = array1.length > array2.length ? array2.length : array1.length;
  console.log("before loop, var length is" + length)
  for (var i =0; i < length; i++) {
    zippedArray.push(array1.shift())
    zippedArray.push(array2.shift())
  }
  console.log(zippedArray);
  return zippedArray
}

zip(short, long)
zip(long,short)
