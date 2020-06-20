// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
	let arrA = stringA.toLowerCase().split("");
  let arrB = stringB.toLowerCase().split("");

  for (let indexA of arrA) {
    let match = false;

    for (let indexB of arrB) {
      if (indexA === indexB) {
        match = true;
        arrB.splice(arrB.indexOf(indexB), 1);
        break;
      }
    }
    if (!match) { return false; }
  }

  if (arrB.length > 0) {
    return false;
  } else {
    return true;
  }
}
// -----------------------------------------------------------------------------
// function anagrams(stringA, stringB) {
// 	const aCharMap = buildCharMap(stringA);
// 	const bCharMap = buildCharMap(stringB);
//
// 	if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
// 		return false;
// 	}
//
// 	for (let char in aCharMap) {
// 		if (aCharMap[char] !== bCharMap[char]) {
// 			return false;
// 		}
// 	}
//
// 	return true;
// }
//
// function buildCharMap(str) {
// 	const charMap = {};
//
// 	for (let char of str.replace(/[^\w]/g, "")) {
// 		charMap[char] = charMap[char] + 1 || 1;
// 	}
//
// 	return charMap;
// }
// -----------------------------------------------------------------------------
// function anagrams(stringA, stringB) {
// 	return cleanStr(stringA) === cleanStr(stringB);
// }
//
// function cleanStr(str) {
// 	return str
// 		.replace("/[^\w]/g", "")
// 		.toLowerCase()
// 		.split("")
// 		.sort()
// 		.join("");
// }

module.exports = anagrams;
