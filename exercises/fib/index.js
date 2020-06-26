// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
// 	let sequence = [0];
//
//   for (let i = 0; i <= n; i++) {
//     if (sequence[i-2] !== undefined) {
//       sequence[i] = sequence[i-2] + sequence[i-1];
//     } else {
//       sequence[i] = i;
//     }
//   }
// 	return sequence[n];
// }

function fib(n) {
	if (n < 2) {
		return n;
	}

	return fib(n-1) + fib(n-2);
}

module.exports = fib;
