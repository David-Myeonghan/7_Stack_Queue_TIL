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
	// --------------------------------- My answer (without valid check) === Solution
	peek() {
		if (!this.isEmpty) {
			return console.log("Empty");
		}

		return console.log(this.top);
	}

	// --------------------------------- My answer
	push(value) {
		const newNode = new Node(value);
		newNode.next = this.top;
		this.top = newNode;

		if (this.bottom === null) {
			this.bottom = newNode;
		}
		this.length++;

		return console.log(this);
	}

	// --------------------------------- Solution: ** I think this is not good as this is using 'length' which is optional in linked list and stack. **
	// push(value) {
	// 	const newNode = new Node(value);
	// 	if (this.length === 0) {
	// 		this.top = newNode;
	// 		this.bottom = newNode;
	// 	} else {
	// 		const holdingPointer = this.top;
	// 		this.top = newNode;
	// 		this.top.next = holdingPointer;
	// 	}
	// 	this.length++;
	// 	return this;
	// }

	// --------------------------------- My answer
	// pop() {
	// 	// if it was the last item
	// 	if (this.top.next === null) {
	// 		this.top = null;
	// 		this.bottom = null;
	// 		this.length--;
	// 		return console.log(this);
	// 	}
	// 	this.top = this.top.next;
	// 	this.length--;

	// 	return console.log(this);
	// }

	// --------------------------------- Solution: more rich
	pop() {
		if (!this.top) {
			return null;
		}
		if (this.top === this.bottom) {
			this.bottom = null;
		}
		const holdingPointer = this.top;
		this.top = this.top.next;
		this.length--;

		return console.log(this);
	}

	isEmpty() {
		if (this.top === null && this.bottom === null) {
			return true;
		}
		return false;
	}
}

const myStack = new Stack();
myStack.isEmpty();
myStack.push("Discord");
myStack.push("Udemy");
myStack.push("Google");
myStack.peek();
myStack.pop();
myStack.pop();
myStack.pop();

// Discord
// Udemy
// Google
