'use strict';

import HashLinkedList from './HashLinkedList.mjs';

const PRIME_NUMBER = 13;
const DEFAULT_CAPACITY = 16;

class HashMap {
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

  // O(1)
  hash(key) {
    let hashCode = 0;
    for (let i = 0; i < key.length; i++) {
      hashCode = (PRIME_NUMBER * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  // O(N) - if all entries hash to single bucket
  // Returns the value associated with given key, or null if key not found.
  get(key) {
    // hash key, check if that bucket is empty return null, else iterate thru
    //  the linked list and compare given key with stored keys. if we have a
    //  matching key, return the corresponding value
    const hashIndex = this.hash(key);
    this.validateIndex(hashIndex);
    // console.log(`GET key: ${key} -> hashIndex=${hashIndex}`);

    if (this.buckets[hashIndex] !== null) {
      const list = this.buckets[hashIndex];
      const keyIndex = list.findKey(key);
      if (keyIndex !== null) {
        const node = list.at(keyIndex);
        return node.value;
      }
    }

    return null;
  }

  // O(N) -> if all entries hash to single bucket
  // if the key exists in HashMap, old value is overwritten with given value
  // else a new node is added with the given key and value
  set(key, value) {
    const hashIndex = this.hash(key);
    this.validateIndex(hashIndex);
    // console.log(`SET key: ${key} -> hashIndex=${hashIndex}`);

    if (this.buckets[hashIndex] === null) {
      this.buckets[hashIndex] = new HashLinkedList();
    }

    const list = this.buckets[hashIndex];
    const keyIndex = list.findKey(key);
    if (keyIndex !== null) {
      const node = list.at(keyIndex);
      node.value = value;
    } else {
      list.append(key, value);
      this.size++;
    }
  }

  // if key in map, removes entry with given key and returns true
  // else returns false
  remove(key) {
    if (!this.has(key)) return false;

    const hashIndex = this.hash(key);
    this.validateIndex(hashIndex);

    const list = this.buckets[hashIndex];
    const keyIndex = list.findKey(key);
    console.log(list.removeAt(keyIndex));
    if (list.size === 0) this.buckets[hashIndex] = null;
    this.size--;
    return true;
  }

  // Returns true if key is in HashMap, else false.
  has(key) {
    return this.get(key) !== null;
  }

  // Returns the number of stored keys
  length() {
    return this.size;
  }

  // clears out all entries from HashMap and resets size / capacity to defaults
  clear() {
    this.size = 0;
    this.capacity = DEFAULT_CAPACITY;
    this.buckets = new Array(this.capacity).fill(null);
  }
}

export default HashMap;
