// find the pivot index of the array.
// The pivot index is the index where the sum of the numbers to the left of the index
// is equal to the sum of the numbers to the right of the index

// If the leftSum is equal to the rightSum then return the index else return -1

// METHOD 1: Brute-force

var pivotIndex = function(nums) {
  var left, right, leftSum, rightSum;
  for (let i = 0; i < nums.length; i++) {
    left = nums.slice(0, i);
    right = nums.slice(i + 1);
    leftSum = left.reduce((total, num) => total + num, 0);
    rightSum = right.reduce((total, num) => total + num, 0);
    if (leftSum === rightSum) {
      return i;
    }
  }
  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));

// METHOD 2:

var pivotIndex = function(nums) {
  var totalSum = nums.reduce((accum, num) => accum + num, 0);
  var leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (leftSum === totalSum - leftSum - nums[i]) {
      return i;
    }
    leftSum += nums[i];
  }
  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
