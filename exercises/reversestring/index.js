// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	let revArr = [];
	for (let i = 0; i < str.length; i++) {
		revArr.unshift(str[i])
	}
	return revArr.join("");

}

module.exports = reverse;
