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
    if (index >= this.size) return null;

    let current = this.head;
    for (let i = 0; i < index; i++) {
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

  // O(N)
  // Assumes valid 0 <= index <= size + 1
  // insert at index 0
  //  list is empty
  //    create new node
  //    point node.next -> head (can be null or prior head)
  //    point head -> node
  //    if list was empty prior, assign tail -> node

  insertAt(value, index) {
    if (index === 0) {
      const node = new Node(value, this.head);
      this.head = node;
      if (this.size === 0) this.tail = node;
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      const node = new Node(value, current.next);
      current.next = node;
      if (this.size === 1 || this.size === index) this.tail = node;
    }
    this.size++;
  }

  // O(N)
  removeAt(index) {}
}

export default LinkedList;
