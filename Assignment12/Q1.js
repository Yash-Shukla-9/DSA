// given  Input:
// LinkedList: 1->2->3->4->5
//  Output:1 2 4 5

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  deleteMiddle() {
    if (this.head === null || this.head.next === null) {
      // If the list is empty or has only one node, return null
      return null;
    }

    let slowPtr = this.head;
    let fastPtr = this.head;
    let prevPtr = null;

    // Move the fast pointer two nodes ahead and the slow pointer one node ahead
    while (fastPtr !== null && fastPtr.next !== null) {
      fastPtr = fastPtr.next.next;
      prevPtr = slowPtr;
      slowPtr = slowPtr.next;
    }

    // Delete the middle node(s)
    prevPtr.next = slowPtr.next;

    return this.head;
  }

  insert(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  printList() {
    let current = this.head;
    let result = "";
    while (current !== null) {
      result += current.data + " ";
      current = current.next;
    }
    console.log(result.trim());
  }
}

// Create the linked list
const linkedList = new LinkedList();
linkedList.insert(1);
linkedList.insert(2);
linkedList.insert(3);
linkedList.insert(4);
linkedList.insert(5);

// Print the original list
console.log("Original List:");
linkedList.printList();

// Delete the middle node(s)
linkedList.deleteMiddle();

// Print the modified list
console.log("Modified List:");
linkedList.printList();
