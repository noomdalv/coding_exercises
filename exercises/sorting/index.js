// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length-i-1; j++) {
			if (arr[j] > arr[j+1]) {
				const lesser = arr[j+1];
				arr[j+1] = arr[j];
				arr[j] = lesser;
			}
		}
	}
	return arr;
	// let i = 0;
	// let size = arr.length
	// while (i < size) {
	//
	// 	if (arr[i] > arr[i+1]) {
	// 		let memory  = arr[i+1];
	// 		arr[i+1] = arr[i]
	// 		arr[i] = memory
	// 	}
	// 	i++;
	// 	if (i >= size) {
	// 		i = 0;
	// 		size--;
	// 	}
	// }
	// return arr;
}

function selectionSort(arr) {

}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
