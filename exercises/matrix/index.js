// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
	let matrixArr = [];
	let row = 0;
  let col = 0;
  let i = 1;
  let direction = "right";

  for (let j = 0; j < n; j++) {
    matrixArr.push([]);
  }

  while (i <= n*n) {

    switch (direction) {
      case "right":
        if (col >= n || matrixArr[row][col]) {
          direction = "down";
          row++;
          col--;
        } else {
          matrixArr[row][col] = i;
          col++;
          i++;
        }
        break;
      case "down":
        if (row >= n || matrixArr[row][col]) {
          direction = "left";
          row--;
          col--;
        } else {
          matrixArr[row][col] = i;
          row++;
          i++;
        }
        break;
      case "left":
        if (col < 0 || matrixArr[row][col]) {
          direction = "up";
          row--;
          col++;
        } else {
          matrixArr[row][col] = i;
          col--;
          i++;
        }
        break;
      case "up":
        if (row < 0 || matrixArr[row][col]) {
          direction = "right";
          row++;
          col++;
        } else {
          matrixArr[row][col] = i;
          row--;
          i++;
        }
        break;
      default:
        break;
    }
  }
	return matrixArr;
}

module.exports = matrix;
