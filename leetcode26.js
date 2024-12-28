// 26. Remove Duplicates from Sorted Array
// Question Link : https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150

// Solution One
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const obj = {};

  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    if (obj[nums[start]]) {
      nums.push(...nums.splice(start, 1));
      end--;
    } else {
      obj[nums[start]] = 1;
      start++;
    }
  }

  return Object.keys(obj).length;
};

// Solution Two
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const obj = {};

  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    if (obj[nums[start]]) {
      let temp = nums[start];
      for (let i = start; i < end; i++) {
        nums[i] = nums[i + 1];
      }
      for (let i = end; i < nums.length - 1; i++) {
        nums[i] = nums[i + 1];
      }
      nums[nums.length - 1] = temp;
      end--;
    } else {
      obj[nums[start]] = 1;
      start++;
    }
  }

  return Object.keys(obj).length;
};
