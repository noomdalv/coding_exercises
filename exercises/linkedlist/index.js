// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data, next = null) {
		this.data = data,
		this.next = next
	}
}

class LinkedList {
	constructor() {
		this.head = null
	}

	insertFirst(headData) {
		this.head = new Node(headData, this.head)
		// if (this.head) {
		// 	let tempNode = this.head;
		// 	this.head = new Node(headData);
		// 	this.head.next = tempNode
		// } else {
		// 	this.head = new Node(headData);
		// }
	}

	size() {
		let count = 0;
		let currentNode = this.head
		while (currentNode) {
			count++;
			currentNode = currentNode.next
		}
		return count
	}

	getFirst() {
		return this.head;
	}

	getLast() {
		let currentNode = this.head;
		while (currentNode.next) {
			currentNode = currentNode.next
		}
		return currentNode;
	}

	clear() {
		this.head = null;
	}

	removeFirst() {
		this.head = this.head.next;
	}

	removeLast() {
		if (this.head && this.head.next) {
			let currentNode = this.head;

			while (currentNode.next) {
				if (currentNode.next.next) {
					currentNode = currentNode.next;
				} else {
					currentNode.next = null;
				}
			}

		} else {
			this.head = null;
		}

	}
}


module.exports = { Node, LinkedList };
