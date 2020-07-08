// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
	let node = root;
	let depthsArr = [0];
	let depth = 0;
	let arr = [node, "s"];

	while (arr.length > 1) {
		let node = arr.shift();

		if (node === "s") {
			depthsArr.push(0);
			arr.push("s");
			depth++;
		} else {
			depthsArr[depth] += 1;
			arr.push(...node.children)
		}
	}
	return depthsArr;
}

module.exports = levelWidth;
