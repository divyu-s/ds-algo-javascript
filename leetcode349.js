// 349. Intersection of Two Arrays
// Question Link : https://leetcode.com/problems/intersection-of-two-arrays/description/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let inter = [];
  nums1.forEach((ele) => {
    if (nums2.includes(ele) && !inter.includes(ele)) {
      inter.push(ele);
    }
  });
  return inter;
};
