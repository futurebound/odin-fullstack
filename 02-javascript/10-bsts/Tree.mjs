'use strict';

import TreeNode from './TreeNode.mjs';

class Tree {
  constructor(array) {
    this.size = 0;
    this._root = this.buildTree(array);
  }

  get root() {
    return this._root;
  }

  set root(node) {
    this._root = node;
  }

  // returns a null or a TreeNode that is the root of a balanced BST subtree
  // 0 <= start <= end < array.length
  createBalancedTree(array, start, end) {
    // base case: subarray has been completely processed
    if (start > end) return null;

    // calculate midpoint, as that will be the root node of balanced subtree
    const midpoint = start + Math.floor((end - start) / 2);
    let node = new TreeNode(array[midpoint]);
    this.size++;

    // build left and right subtrees with left and right subarrays, exluding
    //  the midpoint (since it's already been populated into a node)
    node.left = this.createBalancedTree(array, start, midpoint - 1);
    node.right = this.createBalancedTree(array, midpoint + 1, end);

    return node;
  }

  // turn array into balanced binary tree full of Nodes
  buildTree(array) {
    if (array.length <= 0) return null;

    let unique = [...new Set(array)]; // dedupe
    unique.sort((a, b) => {
      return parseInt(a) - parseInt(b);
    });
    console.log(unique);

    // input deduped and sorted, now can build balanced tree
    return this.createBalancedTree(unique, 0, unique.length - 1);
  }

  prettyPrint(node, prefix = '', isLeft = true) {
    if (node === null) return;
    else if (node.right !== null)
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? '│   ' : '    '}`,
        false
      );

    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null)
      this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
}

export default Tree;
