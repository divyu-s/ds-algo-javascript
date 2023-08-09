// 14. Longest Common Prefix
// Question Link https://leetcode.com/problems/longest-common-prefix/description/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[0].substring(0, i + 1) != strs[j].substring(0, i + 1)) {
        return strs[0].substring(0, i);
      }
    }
  }

  return strs[0];
};
