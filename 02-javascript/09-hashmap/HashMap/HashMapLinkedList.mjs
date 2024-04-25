'use strict';

import HashMapNode from './HashMapNode.mjs';

class HashMapLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // O(1)
  append(key, value) {
    const node = new HashMapNode(key, value);

    if (this.size <= 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }
    this.size++;
  }

  // O(1)
  prepend(key, value) {
    const node = new HashMapNode(key, value, this.head);
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
  // Returns the node at given valid index, else null;
  at(index) {
    if (index >= this.size) return null;

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  // O(N)
  pop() {
    if (this.size <= 0) return null;
    else if (this.size === 1) {
      const node = this.head;
      this.head = null;
      this.tail = null;
      this.size--;
      return node;
    }

    // navigate to 2nd to last node, reassign as new tail, and return
    //  the last node (popped)
    let current = this.head;
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
  contains(key, value) {
    let current = this.head;
    while (current !== null) {
      if (current.key === key && current.value === value) return true;
      current = current.next;
    }

    return false;
  }

  // O(N)
  find(key, value) {
    let index = 0;
    let current = this.head;
    while (current !== null) {
      if (current.key === key && current.value === value) return index;
      current = current.next;
      index++;
    }

    return null;
  }

  // O(N)
  findKey(key) {
    let index = 0;
    let current = this.head;
    while (current !== null) {
      if (current.key === key) return index;
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
      output += `( ${current.key}: ${current.value} ) -> `;
      current = current.next;
    }
    return output + 'null';
  }

  // O(N)
  // Assumes valid 0 <= index <= size + 1
  insertAt(key, value, index) {
    if (index === 0) {
      const node = new HashMapNode(key, value, this.head);
      this.head = node;
      if (this.size === 0) this.tail = node; // edge case
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      const node = new HashMapNode(key, value, current.next);
      current.next = node;

      // edge cases
      if (this.size === 1 || this.size === index) this.tail = node;
    }
    this.size++;
  }

  // O(N)
  // assumes valid 0 <= index < size.
  // returns null if given index >= size
  // removes node from list without a reference to list
  // i.e. removeAt(index).next always is null
  removeAt(index) {
    if (index >= this.size) return null;
    else if (index === 0) {
      const node = this.head;
      this.head = node.next;
      if (this.size === 1) this.tail = node.next;
      node.next = null;
      this.size--;
      return node;
    } else {
      // 0 < index < size
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      const node = current.next;
      current.next = node.next;
      node.next = null;
      this.size--;
      if (this.size === index) this.tail = current;
      return node;
    }
  }

  keys() {
    const output = [];
    let current = this.head;
    while (current !== null) {
      output.push(current.key);
      current = current.next;
    }
    return output;
  }

  values() {
    const output = [];
    let current = this.head;
    while (current !== null) {
      output.push(current.value);
      current = current.next;
    }
    return output;
  }
}

export default HashMapLinkedList;
