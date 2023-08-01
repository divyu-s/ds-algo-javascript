// 75. Sort Colors
// Questions Link : https://leetcode.com/problems/sort-colors/description/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let p1 = -1;
  let p2 = nums.length;
  let itr = 0;
  while (itr < p2) {
    if (nums[itr] == 0) {
      let temp = nums[itr];
      nums[itr] = nums[p1 + 1];
      nums[p1 + 1] = temp;
      p1++;
      itr++;
    } else if (nums[itr] == 2) {
      let temp = nums[itr];
      nums[itr] = nums[p2 - 1];
      nums[p2 - 1] = temp;
      p2--;
    } else {
      itr++;
    }
  }
};
