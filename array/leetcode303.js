// 303. Range Sum Query - Immutable
// Question Link https://leetcode.com/problems/range-sum-query-immutable/description/

// Brute Force Solution

/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.nums = nums;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  let sum = 0;

  for (let i = left; i <= right; i++) {
    sum += this.nums[i];
  }

  return sum;
};

// Time Complexity : O(N*2)
// Space Complexity : O(N) + O(1)+O(N) = O(N)

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

// Optimal Solution (useing prefix sum stategy)

/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.prefixSum = [];
  this.nums = nums;

  nums.forEach((ele, i) => {
    if (i === 0) {
      this.prefixSum = [ele];
    } else {
      this.prefixSum[i] = this.prefixSum[i - 1] + ele;
    }
  });
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.prefixSum[right] - this.prefixSum[left] + this.nums[left];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

// Time Complexity : O(N) + O(Q) = O(N)
// Space Complexity : O(N) + O(N) + O(N) = O(N)
