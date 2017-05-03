// | Step | Value | Digits |
// | ---- | ----- | ------ |
// | 0    | 12345 | 5      |
// | 1    | 15    | 2      |
// | 2    | 6     | 1      |

// # Sum of Digits
//
// You are given a valid integer.
// Sum all of the digits of the number.
// If the number is still multiple digits: repeat.
// Keep repeating until you are left with a single digit.

const sumDigits = num => {
  return num.split('');
}

sumDigits(12345);  // 6
