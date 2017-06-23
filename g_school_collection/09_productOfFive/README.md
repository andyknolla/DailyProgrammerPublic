## Product of Five

Given a number like 127289373913828309127381263, find the product of the 5 adjacent numbers whose product is largest.  So in a simple case of 111333321, your function should return 162 from 3*3*3*3*2.

The answer for 127289373913828309127381263 is 3024.

loop through the input number, pushing 5-number chunks into an array.

use .reduce(). compare previous with current, return highest product between the two. 
