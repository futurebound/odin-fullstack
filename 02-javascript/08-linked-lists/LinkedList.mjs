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

  // O(1)
  size() {
    return this.size;
  }

  // O(1)
  head() {
    return this.head;
  }

  // O(1)
  tail() {
    return this.tail;
  }

  // O(N)
  at(index) {
    if (index > this.size) return null;

    let current = this.head;
    for (let i = 1; i < index; i++) {
      current = current.next;
    }
    return current.value;
  }

  // O(N)
  pop() {
    if (this.size <= 0) return null;
    else if (this.size === 1) {
      const node = this.head;
      this.head = null;
      this.tail = null;
      return node;
    }

    // navigate to 2nd to last node, reassign as new tail, and return
    //  the last node (popped)
    const current = this.head;
    while (current.next.next !== null) {
      current = current.next;
    }
    const popped = current.next;
    current.next = null;
    this.tail = current;
    this.size--;
    return popped;
  }

  // O(N)
  contains(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) return true;
      current = current.next;
    }

    return false;
  }

  // O(N)
  find(value) {
    let index = 0;
    let current = this.head;
    while (current !== null) {
      if (current.value === value) return index;
      current = current.next;
      index++;
    }

    return null;
  }

  // O(N)
  toString() {
    let output = '';
    let current = this.head;
    while (current !== null) {
      output += `( ${current.value} ) -> `;
      current = current.next;
    }
    return output + 'null';
  }
}

export default LinkedList;
