class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const newNode = new Node(val);
    
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode; 
    }
    this.tail = newNode;
    this.length++;
    
    return this;
  }

  pop() {
    if (!this.head) return;
    if (!this.head.next) {
      const oldTail = this.tail;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return oldTail; 
    };

    let newTail = this.head;
    
    while (newTail.next !== this.tail) {
      newTail = newTail.next;
    }
    
    const oldTail = newTail.next;
    
    newTail.next = null;
    this.tail = newTail;
    this.length--;
    
    return oldTail;
  }

  shift() {
    if (!this.head) return;
    this.length--;
    const oldHead = this.head;
    this.head = oldHead.next;
    if (this.length === 0) {
      this.tail = null;
    }
    return oldHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
}

let list = new SingleLinkedList();
list.push(1);
list.pop();
console.log(list);
list.unshift(23)
console.log(list);
