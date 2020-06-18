// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
	// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	let charObj = {};
  let maxChar = "";
  let maxCount = 0;

  for (let char in str) {
    if (charObj[str[char]]) {
      charObj[str[char]] = charObj[str[char]] + 1;
    } else {
      charObj[str[char]] = 1;
    }
  }

  for (let index in charObj) {
    if (charObj[index] > maxCount) {
      maxChar = index;
      maxCount = charObj[index]
    }
  }
  return maxChar;
}

module.exports = maxChar;
