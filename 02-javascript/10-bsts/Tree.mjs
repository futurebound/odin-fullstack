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

    // input deduped and sorted, now can build balanced tree
    return this.createBalancedTree(unique, 0, unique.length - 1);
  }

  /**
   * Inserts the given value into the BST.
   */
  insert(value) {}

  /**
   * Deletes the given value (assumes given value already in tree)
   */
  delete(value) {}

  /**
   * Returns node with given value (assumes value already in tree)
   */
  find(value) {
    return this.findHelper(value, this.root);
  }

  findHelper(value, node) {
    if (node !== null) {
      if (value === node.data) {
        return node;
      }

      if (value < node.data) {
        return this.findHelper(value, node.left);
      } else {
        return this.findHelper(value, node.right);
      }
    }
  }

  /**
   * Performs level-order traversal with optional callback.
   * If callback provided, provides each node as argument to callback.
   * Else returns an array with level-order values.
   */
  levelOrder(callback = null) {
    if (this.size <= 0) return 'tree is empty';

    let output = [];
    let queue = new Queue();
    queue.enqueue(this.root);
    while (!queue.isEmpty()) {
      let node = queue.dequeue();
      if (node !== null) {
        queue.enqueue(node.left);
        queue.enqueue(node.right);
        if (callback === null) {
          output.push(node.data);
        } else {
          callback(node);
        }
      }
    }

    if (callback === null) return output;
  }

  /**
   * Performs pre-order traversal with optional callback.
   * If callback provided, provides each node as argument to callback.
   * Else returns an array with pre-order values.
   */
  preOrder(callback = null) {
    let output = [];
    this.preOrderTraversal(this.root, output, callback);
    if (callback === null) return output;
  }

  preOrderTraversal(node, array, callback = null) {
    if (node !== null) {
      if (callback !== null) {
        callback(node);
      } else {
        array.push(node.data);
      }

      this.preOrderTraversal(node.left, array, callback);
      this.preOrderTraversal(node.right, array, callback);
    }
  }

  /**
   * Performs in-order traversal with optional callback.
   * If callback provided, provides each node as argument to callback.
   * Else returns an array with in-order values.
   */
  inOrder(callback = null) {
    let output = [];
    this.inOrderTraversal(this.root, output, callback);
    if (callback === null) return output;
  }

  inOrderTraversal(node, array, callback = null) {
    if (node !== null) {
      this.inOrderTraversal(node.left, array, callback);

      if (callback !== null) {
        callback(node);
      } else {
        array.push(node.data);
      }

      this.inOrderTraversal(node.right, array, callback);
    }
  }

  /**
   * Performs post-order traversal with optional callback.
   * If callback provided, provides each node as argument to callback.
   * Else returns an array with post-order values.
   */
  postOrder(callback = null) {
    let output = [];
    this.postOrderTraversal(this.root, output, callback);
    if (callback === null) return output;
  }

  postOrderTraversal(node, array, callback = null) {
    if (node !== null) {
      this.postOrderTraversal(node.left, array, callback);
      this.postOrderTraversal(node.right, array, callback);

      if (callback !== null) {
        callback(node);
      } else {
        array.push(node.data);
      }
    }
  }

  // Returns the given node's height (# of edges in longest path from given
  //  node to a leaf node)
  // If a given node is null, will return 0.
  // A leaf node will return 1
  height(node) {
    if (node === null || (node.left === null && node.right === null)) {
      return 0;
    }

    // console.log(node);
    const leftHeight = 1 + this.height(node.left);
    const rightHeight = 1 + this.height(node.right);
    return Math.max(leftHeight, rightHeight);
  }

  /**
   * Returns the given node's depth (# edges from given node to tree's root)
   */
  depth(node) {
    // tree deduped, so can tell by comparing node.data equality
    if (node !== null && this.root !== null) {
      return this.depthHelper(node, this.root, 0);
    }
  }

  depthHelper(target, current, depth) {
    if (target !== null && current !== null) {
      if (target.data === current.data) {
        return depth;
      }

      if (target.data < current.data) {
        return this.depthHelper(target, current.left, depth + 1);
      } else {
        return this.depthHelper(target, current.right, depth + 1);
      }
    }
  }

  /**
   * @returns true if difference in height of left & right subtrees is <= 1
   */
  isBalanced() {
    if (this.root === null) {
      return true;
    }

    const leftHeight = this.height(this.root.left);
    const rightHeight = this.height(this.root.right);
    const difference = Math.abs(leftHeight - rightHeight);
    return difference > 1;
  }

  // TODO
  rebalance() {
    if (!this.isBalanced()) {
      const data = inOrder();
      this._root = this.buildTree(data);
    }
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
