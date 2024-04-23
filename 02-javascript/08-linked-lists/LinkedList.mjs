'use strict';

import Node from './Node.mjs';

class LinkedList {
  constructor() {
    this.head = new Node();
    this.tail = this.head;
    this.size = 0;
  }
}
