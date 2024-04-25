'use strict';

import HashSetLinkedList from './HashSetLinkedList.mjs';

const PRIME_NUMBER = 13;
const DEFAULT_CAPACITY = 16;

class HashSet {
  constructor() {
    this.size = 0;
    this.loadFactor = 0.75;
    this.capacity = DEFAULT_CAPACITY;
    this.buckets = new Array(DEFAULT_CAPACITY).fill(null);
  }

  validateIndex(index) {
    if (index < 0 || index >= this.buckets.length) {
      throw new Error('Trying to access index out of bound');
    }
  }

  hash(key) {
    let hashCode = 0;
    for (let i = 0; i < key.length; i++) {
      hashCode = (PRIME_NUMBER * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  expandBuckets() {
    this.size = 0;
    this.capacity = this.capacity * 2;
    const oldKeys = this.keys();
    console.log(oldKeys);
    this.buckets = new Array(this.capacity).fill(null);
    oldKeys.forEach((key) => {
      this.set(key);
    });
  }

  set(key) {
    const hashIndex = this.hash(key);
    this.validateIndex(hashIndex);

    if (this.buckets[hashIndex] === null) {
      this.buckets[hashIndex] = new HashSetLinkedList();
    }

    const list = this.buckets[hashIndex];
    const keyIndex = list.find(key);
    if (keyIndex === null) {
      list.append(key, null);
      this.size++;
    }

    // check if we need to expand the HashTable
    // console.log(Math.floor(this.capacity * this.loadFactor));
    if (this.size > Math.floor(this.capacity * this.loadFactor)) {
      this.expandBuckets();
    }
  }

  // Returns true if key is in HashMap, else false.
  contains(key) {
    return this.buckets[this.hash(key)] !== null;
  }

  remove(key) {
    if (!this.contains(key)) return false;

    const hashIndex = this.hash(key);
    this.validateIndex(hashIndex);

    const list = this.buckets[hashIndex];
    const keyIndex = list.find(key);
    console.log(list.removeAt(keyIndex));
    if (list.size === 0) this.buckets[hashIndex] = null;
    this.size--;
    return true;
  }

  length() {
    return this.size;
  }

  clear() {
    this.size = 0;
    this.capacity = DEFAULT_CAPACITY;
    this.buckets = new Array(this.capacity).fill(null);
  }

  // Returns array containing all keys
  keys() {
    const output = [];
    this.buckets.forEach((list) => {
      if (list !== null) {
        const listKeys = list.keys();
        listKeys.forEach((key) => {
          output.push(key);
        });
      }
    });

    return output;
  }
}

export default HashSet;
