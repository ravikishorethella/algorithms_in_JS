// Find whether the largest element in the array is at least twice as much as every other number in the array.
// If yes, return the index of the largest number else, return -1 

var dominantIndex = function(nums) {
    let max = nums[0];
    let max2 = -Infinity;
    let maxIndex = 0;
    for (let i = 1; i < nums.length; i++){
        if (nums[i] >= max) {
            max2 = max;
            max = nums[i];
            maxIndex = i;
        } else {
            max2 = Math.max(max2, nums[i]);
        }
    }
    if (max - max2 < max2) return -1;
    return maxIndex;
};
