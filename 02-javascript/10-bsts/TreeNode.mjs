'use strict';

class TreeNode {
  constructor(data = null, left = null, right = null) {
    this._data = data;
    this._left = left;
    this._right = right;
  }

  get data() {
    return this._data;
  }

  set data(data) {
    this._data = data;
  }

  get left() {
    return this._left;
  }

  set left(left) {
    this._left = left;
  }

  get right() {
    return this._right;
  }

  set right(right) {
    this._right = right;
  }
}

export default TreeNode;
