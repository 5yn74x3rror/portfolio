class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      const prevTail = this.tail;
      this.tail = node;
      prevTail.next = node;
      node.prev = prevTail;     
    }

    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return;

    const nodeToRemove = this.tail;
    
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      const prevNode = nodeToRemove.prev;
      prevNode.next = null;
      this.tail = prevNode;
    }
    this.length--;

    return nodeToRemove;
  }
}

const list = new DoubleLinkedList();
console.log(list.push(1));
console.log(list.push(2));
console.log(list.pop())
console.log(list);
console.log(list.pop())
console.log(list);
