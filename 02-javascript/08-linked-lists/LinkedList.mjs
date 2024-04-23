'use strict';

import Node from './Node.mjs';

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // O(1)
  append(value) {
    const node = new Node(value);

    if (this.head === null) this.head = node;
    this.tail = node;
    this.size++;
  }

  // O(1)
  prepend(value) {
    const node = new Node(value, this.head);
    if (this.tail === null) this.tail = node;
    this.head = node;
    this.size++;
  }

  size() {}

  head() {}

  tail() {}

  at(index) {}

  pop() {}

  contains(value) {}

  find(value) {}

  toString() {}
}

export default LinkedList;