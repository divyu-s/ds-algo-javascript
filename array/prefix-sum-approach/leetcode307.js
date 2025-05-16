// 307. Range Sum Query - Mutable
// Question Link : https://leetcode.com/problems/range-sum-query-mutable/description/

// Optimal using Prefic Sum
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.nums = nums;
  this.pSum = [];

  nums.forEach((ele, i) => {
    if (i === 0) {
      this.pSum[i] = ele;
    } else {
      this.pSum[i] = this.pSum[i - 1] + ele;
    }
  });
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (index, val) {
  for (let i = index; i < this.pSum.length; i++) {
    this.pSum[i] = this.pSum[i] - this.nums[index] + val;
  }

  this.nums[index] = val;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.pSum[right] - this.pSum[left] + this.nums[left];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */
