'use strict';

class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }

  get value() {
    return this.value;
  }

  set value(value) {
    this.value = value;
  }

  get next() {
    return this.next;
  }

  set next(next) {
    this.next = next;
  }
}

export default Node;
