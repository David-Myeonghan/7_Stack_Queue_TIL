// Build Stack using array.
// class Node {
// 	constructor(value) {
// 		this.value = value;
// 		this.next = null;
// 	}
// }

class Stack {
	constructor() {
		// ----------------------- My Answer - completely wrong!
		// this.top = null;
		// this.bottom = null;
		// this.array = [];
		// this.length = 0;
		// // this.length = this.array.length; // I do not know why this doesn't work!

		// ----------------------- Solution
		this.array = [];
	}

	peek() {
		if (!this.isEmpty) {
			return console.log("Empty");
		}

		return console.log(this.array[this.array.length - 1]);
	}

	push(value) {
		this.array.push(value);

		return console.log(this);
	}

	pop() {
		this.array.pop();

		return console.log(this);
	}

	isEmpty() {
		if (this.array.length === 0) {
			return true;
		}
		return false;
	}
}

const myStack = new Stack();
// myStack.isEmpty();
console.log(myStack.isEmpty());
myStack.peek();
myStack.push("Discord");
myStack.push("Udemy");
myStack.push("Google");
myStack.pop();
myStack.pop();
myStack.peek();
myStack.pop();
myStack.peek();

// Discord
// Udemy
// Google
