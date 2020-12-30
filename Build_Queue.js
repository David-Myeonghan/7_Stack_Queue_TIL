// Build Queue using Linked List.
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.length = 0;
	}
	peek() {
		if (this.first !== null && this.last !== null) {
			return console.log(this.first);
		}
		return console.log("Empty");
	}
	enqueue(value) {
		const newNode = new Node(value);

		// if first item
		if (this.first === null) {
			this.first = newNode;
			this.last = newNode;
		} else {
			// almost same with solution except not using 'else'
			this.last.next = newNode;
			this.last = newNode;
		}
		this.length++;

		return console.log(this);
	}
	dequeue() {
		// if empty,
		if (!this.first) {
			return null;
		} // solution include this if (!this.first).
		// if last item
		if (this.first === this.last) {
			// this.first = null; // Solution doesn't include these comment
			this.last = null;
			// this.length--;
			// return console.log(this);
		}
		this.first = this.first.next;
		this.length--;

		return console.log(this);
	}

	isEmpty() {
		if (this.first === null && this.last === null) {
			return true;
		}

		return false;
	}
}

const myQueue = new Queue();
myQueue.peek();
myQueue.enqueue("Joy");
// myQueue.peek();
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
// myQueue.peek();
myQueue.dequeue();
myQueue.dequeue();
// myQueue.peek();
myQueue.dequeue();
myQueue.dequeue();

//Joy
//Matt
//Pavel
//Samir
