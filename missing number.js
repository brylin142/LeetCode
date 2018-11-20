// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

//   Example 1:

// Input: [3, 0, 1]
// Output: 2
// Example 2:

// Input: [9, 6, 4, 2, 3, 5, 7, 0, 1]
// Output: 8

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
var missingNumber = function (nums) {
  let sum = 0;
  let expected = nums.length;

  for (i = 0; i < nums.length; i++) {
    sum += nums[i];
    expected += i;
  }
  return expected - sum
};