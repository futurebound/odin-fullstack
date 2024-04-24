'use strict';

import HashLinkedList from './HashLinkedList.mjs';

const PRIME_NUMBER = 13;

class HashMap {
  constructor() {
    this.loadFactor = 0.75;
    this.capacity = 16;
    this.buckets = new Array(this.capacity).fill(null);
  }

  hash(key) {
    let hashCode = 0;
    for (let i = 0; i < key.length; i++) {
      hashCode = (PRIME_NUMBER * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  set(key, value) {
    const hashIndex = this.hash(key);
    console.log(`key: ${key} -> hashIndex=${hashIndex}`);

    if (this.buckets[hashIndex] === null) {
      this.buckets[hashIndex] = new HashLinkedList();
    }

    const list = this.buckets[hashIndex];
    console.log(list);
    // list.append(key, value);
  }

  // O(N) - if all entries are collisions and in linked list
  get(key) {
    // hash key, check if that bucket is empty return null, else iterate thru
    //  the linked list and compare given key with stored keys. if we have a
    //  matching key, return the corresponding value
    const hashIndex = this.hash(key);
    if (this.buckets[hashIndex] !== null) {
      const list = this.buckets[hashIndex];
    }

    return null;
  }
}

export default HashMap;
