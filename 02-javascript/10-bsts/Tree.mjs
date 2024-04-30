'use strict';

import Queue from './Queue.mjs';
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

  levelOrder(callback = null) {
    if (this.size <= 0) return [];

    let output = [];
    let queue = new Queue();
    queue.enqueue(this.root);
    while (!queue.isEmpty()) {
      let node = queue.dequeue();
      if (node !== null) {
        queue.enqueue(node.left);
        queue.enqueue(node.right);
        output.push(node.data);
      }
    }

    return output;
  }

  preOrder(callback = null) {
    let output = [];
    this.preOrderTraversal(output, this.root);
    return output;
  }

  preOrderTraversal(array, node, callback = null) {
    if (node !== null) {
      array.push(node.data);
      this.preOrderTraversal(node.left);
      this.preOrderTraversal(node.right);
    }
  }

  inOrder(callback = null) {
    let output = [];
    this.inOrderTraversal(output, this.root);
    return output;
  }

  inOrderTraversal(array, node, callback = null) {
    if (node !== null) {
      this.inOrderTraversal(node.left);
      array.push(node.data);
      this.inOrderTraversal(node.right);
    }
  }

  postOrder(callback = null) {
    let output = [];
    this.postOrderTraversal(output, this.root);
    return output;
  }

  postOrderTraversal(array, node, callback = null) {
    if (node !== null) {
      this.postOrderTraversal(node.left);
      this.postOrderTraversal(node.right);
      array.push(node.data);
    }
  }

  rebalance() {
    const data = inOrder();
    this._root = this.buildTree(data);
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
