'use strict';

import HashLinkedList from './HashLinkedList.mjs';

const PRIME_NUMBER = 13;

class HashMap {
  constructor() {
    this.capacity = 16;
    this.loadFactor = 0.75;
    this.buckets = new Array(this.capacity).fill(null);
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
    }
  }
}

export default HashMap;
