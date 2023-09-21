// 1002. Find Common Characters
// Question Link --> https://leetcode.com/problems/find-common-characters/description/

/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  let charInAllStr = [];

  if (words.length === 0) {
    return charInAllStr;
  }

  for (let char of words[0]) {
    let flag = true;
    for (let i = 1; i < words.length; i++) {
      if (count(char, words[i]) > count(char, charInAllStr)) {
        continue;
      } else {
        flag = false;
        break;
      }
    }
    if (flag) {
      charInAllStr.push(char);
    }
  }

  return charInAllStr;
};

var count = (char, value) => {
  let count = 0;
  for (let i = 0; i < value.length; i++) {
    if (value[i] === char) {
      count++;
    }
  }
  return count;
};
