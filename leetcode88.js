// 88. Merge Sorted Array
// Question Link : https://leetcode.com/problems/merge-sorted-array/description/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = 0;
  let j = 0;

  while (i >= 0 && j < n) {
    if (nums1[0] <= nums2[j]) {
      let value = nums1[0];
      for (let k = 1; k < m + n; k++) {
        nums1[k - 1] = nums1[k];
      }
      nums1[m + n - 1] = 0;
      temp--;
      nums1[temp] = value;
      i--;
      temp++;
    } else {
      nums1[temp] = nums2[j];
      j++;
      temp++;
    }
  }

  if (i >= 0) {
    while (i >= 0) {
      let value = nums1[0];
      for (let k = 1; k < m + n; k++) {
        nums1[k - 1] = nums1[k];
      }
      nums1[m + n - 1] = 0;
      temp--;
      nums1[temp] = value;
      i--;
      temp++;
    }
  }

  if (j < n) {
    for (let i = j; i < n; i++) {
      nums1[temp] = nums2[i];
      temp++;
    }
  }
};
