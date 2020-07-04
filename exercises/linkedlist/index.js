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

	insertLast(data) {
		let currentNode = this.head;

		if (!this.head) {
			this.head = new Node(data);
		} else {
			while (currentNode.next) {
				currentNode = currentNode.next;
			}
			currentNode.next = new Node(data);
		}
	}

	getAt(index) {
		let counter = 0;
		let currentNode = this.head;

		if (currentNode) {
			while (counter < index) {
				counter++;
				currentNode = currentNode.next;
			};
		}
		return currentNode;
	}

	removeAt(index) {
		let counter = 0;
    let currentNode = this.head;
    let prevNode = currentNode;

    while (currentNode) {
			if (index === 0) {
				this.head = this.head.next;
				return;
			}
			if (counter === index) {
				prevNode.next = currentNode.next;
				break;
			}
			prevNode = currentNode;
			currentNode = currentNode.next;
			counter++
		}
		return this.head
	}

	insertAt(data, index) {
		let counter = 0;
		let currentNode = this.head;

		while (currentNode) {
			if (index === 0) {
				this.head = new Node(data, currentNode);
				return;
			}
			if (counter === index - 1 || !currentNode.next) {
				let memNode = currentNode.next;
				currentNode.next = new Node(data, memNode);
				return;
			}
			currentNode = currentNode.next
			counter++;
		}
		this.head = new Node(data);
	}

	forEach(fn) {
		let node = this.head;
		let counter = 0;

		while (node) {
			fn(node, counter);
			node = node.next;
			counter++;
		}
	}

	*[Symbol.iterator]() {
		let node = this.head;

		while(node) {
			yield node;
			node = node.next;
		}
	}
}


module.exports = { Node, LinkedList };
