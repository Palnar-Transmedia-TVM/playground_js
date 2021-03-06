// Implement Node class to create a Binary Search Tree (BST)
// It should Initialize left, data and right values. 
// Also, Implement insert() method which accepts an argument 'data'.
// Insert data in the tree according to the BST specifications.

class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}

	insert(data) {
		if(data < this.data && this.left) {
			// recursively call insert() on left subtree
			this.left.insert(data);
		} else if(data < this.data) {
			// create a new node here
			this.left = new Node(data);
		}
		// repeat with right tree
		else if(data > this.data && this.right) {
			// recursively call insert() on right subtree
			this.right.insert(data);
		}else if(data > this.data) {
			this.right = new Node(data);
		}
	}
	// Searching for a value
	contains(data) {
		if(this.data === data) {
			return this;
		}
		// if the given value is greater than the node -- traverse right
		if(this.data < data && this.right) {
			return this.right.contains(data);
		} // If the given value is less than the node -- traverse left
		else if(this.data > data && this.left) {
			return this.left.contains(data);
		}
		// the element does not exist if we skip the above ti if-else if statements
		return null;
	}
}

let node = new Node(32);
node.insert(43);
node.insert(99);
node.insert(1);
node.insert(9);
node.insert(11);
node.insert(23);

node.contains(1);

module.exports = Node;