class StackNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  } 
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const node = new StackNode(val);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      node.next = this.first;
      this.first = node;
    }
    console.log(this.size + 1);
    return ++this.size;
  }

  pop() {
    if (!this.first) {
      console.log(null)
      return null
    } else {
      const nextNode = this.first.next;
      const removedNode = this.first;
      this.first = nextNode;
      this.size--;
      console.log(removedNode);
      return removedNode;
    }
  }
}

const stack = new Stack();
stack.push(123);
stack.push(1234);
stack.push(12333);
stack.pop()
stack.pop()
stack.pop()
stack.push(456)