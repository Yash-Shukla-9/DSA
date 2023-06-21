// given ""

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.bottom = null;
  }
}

function flattenLinkedList(head) {
  if (head === null || head.next === null) {
    return head;
  }

  head.next = flattenLinkedList(head.next);

  head = merge(head, head.next);

  return head;
}

function merge(a, b) {
  if (a === null) {
    return b;
  }
  if (b === null) {
    return a;
  }

  let result;

  if (a.value < b.value) {
    result = a;
    result.bottom = merge(a.bottom, b);
  } else {
    result = b;
    result.bottom = merge(a, b.bottom);
  }

  return result;
}

// Example usage
const node9 = new LinkedListNode(30);
const node8 = new LinkedListNode(8);
const node7 = new LinkedListNode(7);
const node6 = new LinkedListNode(6);
const node5 = new LinkedListNode(20);
const node4 = new LinkedListNode(10);
const node3 = new LinkedListNode(5);
const node2 = new LinkedListNode(15);
const node1 = new LinkedListNode(3);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;
node7.next = node8;
node8.next = node9;

const flattenedList = flattenLinkedList(node1);

let result = "";
let current = flattenedList;

while (current) {
  result += current.value + " ";
  current = current.bottom;
}

console.log(result.trim());
