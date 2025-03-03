// 151. Reverse Words in a String
// https://leetcode.com/problems/reverse-words-in-a-string/description/

// Soution One

var reverseWords = function (s) {
  let array = s.split(" ").reverse();
  let str = "";

  array.forEach((item, index) => {
    if (item) {
      str += item;
      str += " ";
    }
  });

  return str.slice(0, str.length - 1);
};

// Soultion Two
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let i = s.length - 1;
  let j = s.length;

  let outputStr = "";
  while (i >= 0) {
    if (i == 0) {
      if (s[i] == " ") {
        outputStr += s.substring(i + 1, j);
      } else {
        outputStr += s.substring(i, j);
      }
      j = i;
      i = j - 1;
    } else if (s[i] == " ") {
      if (s.substring(i + 1, j)) {
        outputStr += s.substring(i + 1, j);
        outputStr += " ";
      }
      j = i;
      i = j - 1;
    } else {
      i--;
    }
  }

  return outputStr.trim();
};
