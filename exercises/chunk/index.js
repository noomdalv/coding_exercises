// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
	let newArr = [];
  let count = 0;
  let chunk = [];

  for (let i = 0; i < array.length; i++) {
    if (count === size) {
      newArr.push(chunk);
      chunk = [];
      count = 0;
    }
    chunk.push(array[i])
    count++;
  }
  if (chunk) { newArr.push(chunk); }

  return newArr;
}

module.exports = chunk;
