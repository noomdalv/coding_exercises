// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
// 	let vowelArr = ["a", "e", "i", "o", "u"];
// 	let count = 0;
//
// 	for (let i = 0; i < str.length; i++) {
// 		if (vowelArr.indexOf(str[i].toLowerCase()) >= 0) {
// 			count++
// 		}
// 	}
// 	return count;
// }

function vowels(str) {
	const matches = str.match(/[aeiou]/gi);
	return matches ? matches.length : 0;
}

module.exports = vowels;
