// Build Stack using linked list.
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.top = null;
		this.bottom = null;
		this.length = 0;
	}

	peek() {
		if (this.isEmpty) {
			return "Empty";
		}

		return this.top;
	}

	push(value) {
		const newNode = new Node(value);
		// newNode.next = null;
		this.top = newNode;

		if (this.bottom === null) {
			this.bottom = newNode;
		}
		this.length++;

		return this;
	}
	pop() {}

	isEmpty() {
		if (!this.top && !this.bottom) {
			return true;
		}
		return false;
	}
}

const myStack = new Stack();
myStack.isEmpty();

// Discord
// Udemy
// Googld
