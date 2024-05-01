'use strict';

import Tree from './Tree.mjs';

const BASIC_TREE_SIZE = 10;

// UTILITY FUNCTION
const setUpBasicTreeStatic = () => {
  const data = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
  const tree = new Tree(data);
  tree.prettyPrint(tree.root);
  return tree;
};

const setUpBasicTreeRandom = () => {
  const data = [];
  for (let i = 0; i < BASIC_TREE_SIZE; i++) {
    data.push(Math.floor(Math.random() * 100));
  }
  const tree = new Tree(data);
  tree.prettyPrint(tree.root);
  return tree;
};

const testBuildTree = () => {
  const data = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
  const tree = new Tree(data);
  console.log(tree);
  tree.prettyPrint(tree.root);
};

const testInsert = () => {
  const tree = setUpBasicTreeRandom();
  tree.insert(2);
  tree.prettyPrint(tree.root);
  tree.insert(101);
  tree.prettyPrint(tree.root);
  tree.insert(102);
  tree.prettyPrint(tree.root);
  tree.insert(103);
  tree.prettyPrint(tree.root);
};

const testDelete = () => {
  // [1, 3, 4, 5, 7, 8, 9, 23, 67, 324, 6345]
  const tree = setUpBasicTreeStatic();
  tree.delete(8);
  tree.prettyPrint(tree.root);
};

const testContains = () => {
  // [1, 3, 4, 5, 7, 8, 9, 23, 67, 324, 6345]
  const tree = setUpBasicTreeStatic();
  console.log(tree.contains(1));
  console.log(tree.contains(8));
  console.log(tree.contains(6345));
  console.log(tree.contains(20));
};

const testFind = () => {
  // [1, 3, 4, 5, 7, 8, 9, 23, 67, 324, 6345]
  const tree = setUpBasicTreeStatic();
  console.log(tree.find(20));
  console.log(tree.find(8));
  console.log(tree.find(1));
  console.log(tree.find(67));
  console.log(tree.find(6345));
};

const testLevelOrder = () => {
  const tree = setUpBasicTree();
  console.log(tree.levelOrder());
};

const testLevelOrderCallback = () => {
  const tree = setUpBasicTree();
  tree.levelOrder((node) => {
    console.log(node.data);
  });
};

const testPreOrder = () => {
  const tree = setUpBasicTree();
  console.log(tree.preOrder());
};

const testPreOrderCallback = () => {
  const tree = setUpBasicTree();
  tree.preOrder((node) => {
    console.log(node.data);
  });
};

const testInOrder = () => {
  const tree = setUpBasicTree();
  console.log(tree.inOrder());
};

const testInOrderCallback = () => {
  const tree = setUpBasicTree();
  tree.inOrder((node) => {
    console.log(node.data);
  });
};

const testPostOrder = () => {
  const tree = setUpBasicTree();
  console.log(tree.postOrder());
};

const testPostOrderCallback = () => {
  const tree = setUpBasicTree();
  tree.postOrder((node) => {
    console.log(node.data);
  });
};

const testHeight = () => {
  const data = [1];
  let tree = new Tree(data);
  tree.prettyPrint(tree.root);
  console.log(`height = ${tree.height(tree.root)}`);

  tree = new Tree([1, 2]);
  tree.prettyPrint(tree.root);
  console.log(`height = ${tree.height(tree.root)}`);

  tree = new Tree([1, 2, 3]);
  tree.prettyPrint(tree.root);
  console.log(`height = ${tree.height(tree.root)}`);

  tree = new Tree([1, 2, 3, 4]);
  tree.prettyPrint(tree.root);
  console.log(`height = ${tree.height(tree.root)}`);

  tree = setUpBasicTree();
  console.log(`height = ${tree.height(tree.root)}`);
};

const testDepth = () => {
  const tree = setUpBasicTree();
  console.log('tree setup, now testing depth(node)');
  console.log(`depth of root = ${tree.depth(tree.root)}`);
  console.log(`depth of 4 = ${tree.depth(tree.root.left)}`);
  console.log(`depth of 3 = ${tree.depth(tree.root.left.left.right)}`);
};

// testBuildTree();
// testInsert();
testDelete();
// testContains();
// testFind();
// testLevelOrder();
// testLevelOrderCallback();
// testPreOrder();
// testPreOrderCallback();
// testInOrder();
// testInOrderCallback();
// testPostOrder();
// testPostOrderCallback();
// testHeight();
// testDepth();
// testIsBalanced();
// testRebalance();
