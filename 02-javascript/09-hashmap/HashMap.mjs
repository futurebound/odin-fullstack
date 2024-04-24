'use strict';

const PRIME_NUMBER = 13;

class HashMap {
  constructor() {
    this.buckets = [];
    this.capacity = 16;
    this.loadFactor = 0.75;
  }

  hash(key) {
    let hashCode = 0;
    for (let i = 0; i < key.length; i++) {
      hashCode = (PRIME_NUMBER * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }
}

export default HashMap;
