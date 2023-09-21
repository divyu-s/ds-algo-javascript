// 27. Remove Element
// Question Link https://leetcode.com/problems/remove-element/description/?envType=study-plan-v2&envId=top-interview-150

// Soution 1
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let i = -1;
  let j = nums.length;

  while (i + 1 < j) {
    if (nums[i + 1] == val) {
      j--;
      let temp = nums[j];
      nums[j] = nums[i + 1];
      nums[i + 1] = temp;
    } else {
      i++;
    }
  }

  return i + 1;
};

// Soution 2
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }

  return nums.length;
};
