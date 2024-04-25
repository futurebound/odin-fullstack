'use strict';

class HashSetNode {
  constructor(key = null, next = null) {
    this._key = key;
    this._next = next;
  }

  get key() {
    return this._key;
  }

  set key(key) {
    this._key = key;
  }

  get next() {
    return this._next;
  }

  set next(next) {
    this._next = next;
  }
}

export default HashSetNode;
