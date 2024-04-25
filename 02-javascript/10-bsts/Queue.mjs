'use strict';

class Queue {
  constructor() {
    this.size = 0;
    this.queue = [];
  }

  enqueue(data) {
    this.size++;
    this.queue.push(data);
  }

  dequeue() {
    if (this.size > 0) {
      this.size--;
      return this.queue.shift();
    } else {
      return null;
    }
  }

  peek() {
    if (this.size > 0) {
      return this.queue[0];
    } else {
      return null;
    }
  }

  isEmpty() {
    return this.size <= 0;
  }
}

export default Queue;
