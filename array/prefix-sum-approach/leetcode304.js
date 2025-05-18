// 304. Range Sum Query 2D - Immutable
// Question Link : https://leetcode.com/problems/range-sum-query-2d-immutable/description/

// Solution One (Using prefix sum row wise)

/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  this.matrix = matrix;
  this.pSum = [];

  for (let r = 0; r < matrix.length; r++) {
    const array = [];
    for (let c = 0; c < matrix[0].length; c++) {
      if (c == 0) {
        array.push(matrix[r][c]);
      } else {
        array.push(array[c - 1] + matrix[r][c]);
      }
    }
    this.pSum.push(array);
  }
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  let sum = 0;
  for (let r = row1; r <= row2; r++) {
    sum += this.pSum[r][col2] - this.pSum[r][col1] + this.matrix[r][col1];
  }
  return sum;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
