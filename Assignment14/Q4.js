// given ""

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.bottom = null;
    this.random = null;
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

function copyRandomList(head) {
  if (head === null) {
    return null;
  }

  const nodeMap = new Map();

  // Create copies of nodes
  let current = head;
  while (current) {
    const copyNode = new LinkedListNode(current.value);
    nodeMap.set(current, copyNode);
    current = current.next;
  }

  // Set next and random pointers of copy nodes
  current = head;
  while (current) {
    const copyNode = nodeMap.get(current);
    copyNode.next = nodeMap.get(current.next);
    copyNode.random = nodeMap.get(current.random);
    current = current.next;
  }

  return nodeMap.get(head);
}

// Example 1 - Flatten Linked List
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

console.log("Flattened List:", result.trim());

const node4Copy = new LinkedListNode(4);
const node3Copy = new LinkedListNode(3);
const node2Copy = new LinkedListNode(2);
const node1Copy = new LinkedListNode(1);

node1Copy.next = node2Copy;
node1Copy.random = node3Copy;
node2Copy.next = node3Copy;
node2Copy.random = node4Copy;
node3Copy.next = node4Copy;
node3Copy.random = node2Copy;
node4Copy.random = node1Copy;

const copiedList = copyRandomList(node1Copy);
