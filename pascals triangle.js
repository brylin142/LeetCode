// Given a non - negative integer numRows, generate the first numRows of Pascal's triangle.


// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Example:

// Input: 5
// Output:
// [
//   [1],
//   [1, 1],
//   [1, 2, 1],
//   [1, 3, 3, 1],
//   [1, 4, 6, 4, 1]
// ]

// /**
//  * @param {number} numRows
//  * @return {number[][]}
//  */
var generate = function (numRows) {
  if (numRows === 0) return []
  let result = [[1]]
  if (numRows === 1) return result
  while (result.length < numRows) {
    let row = [1]
    for (i = 0; i + 1 < result[result.length - 1].length; i++) {
      row.push(result[result.length - 1][i] + result[result.length - 1][i + 1]);
    }
    row.push(1);
    result.push(row);
  }
  return result;
};