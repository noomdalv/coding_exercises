// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
// 	let str = String(Math.abs(n))
// 	let revInt = "";
//
// 	for (let i in str) {
//       revInt = str[i] + revInt
// 	}
//
//   if (n < 0) {
//     revInt = - + revInt
//   }
//
// 	return parseInt(revInt);
// }

function reverseInt(n) {
	const reversed = n
		.toString()
		.split("")
		.reverse()
		.join("");

	if (n < 0) {
		return parseInt(reversed * -1)
	}
	return parseInt(reversed);
}

module.exports = reverseInt;
