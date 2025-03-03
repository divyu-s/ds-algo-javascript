// 557. Reverse Words in a String III
// https://leetcode.com/problems/reverse-words-in-a-string-iii/description/

//Solution One
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let array = s.split(" ");

  let outputStr = "";

  array.forEach((item, index) => {
    let i = 0;
    let j = item.length - 1;

    while (i < j) {
      item = replaceAt(item, i, j);
      i++;
      j--;
    }
    outputStr += item;
    if (index != array.length - 1) {
      outputStr += " ";
    }
  });

  return outputStr;
};

function replaceAt(str, i, j) {
  return (
    str.substring(0, i) +
    str[j] +
    str.substring(i + 1, j) +
    str[i] +
    str.substring(j + 1)
  );
}

// Solution Two
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let k = 0;
  let l = 0;

  let outputStr = "";

  while (l <= s.length) {
    if (s[l] == " " || l == s.length) {
      let item = s.substring(k, l);
      let i = 0;
      let j = item.length - 1;

      while (i < j) {
        item = replaceAt(item, i, j);
        i++;
        j--;
      }
      outputStr += item;
      if (l != s.length) {
        outputStr += " ";
      }

      k = l + 1;
      l = k + 1;
    } else {
      l++;
    }
  }

  return outputStr;
};

function replaceAt(str, i, j) {
  return (
    str.substring(0, i) +
    str[j] +
    str.substring(i + 1, j) +
    str[i] +
    str.substring(j + 1)
  );
}
