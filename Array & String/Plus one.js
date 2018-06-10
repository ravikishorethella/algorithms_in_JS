// plus one
// link to the problem
// https://leetcode.com/explore/learn/card/array-and-string/201/introduction-to-array/1148/

var plusOne = function(digits) {
  for(var i = digits.length - 1; i >= 0; i--){
    if(++digits[i] > 9) digits[i] = 0;
    else return digits;
  }
  digits.unshift(1);
  return digits;
};
