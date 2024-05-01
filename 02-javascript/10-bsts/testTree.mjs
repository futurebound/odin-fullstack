'use strict';

import Tree from './Tree.mjs';

// UTILITY FUNCTION
const setUpBasicTree = () => {
  const data = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
  const tree = new Tree(data);
  // console.log(tree);
  tree.prettyPrint(tree.root);
  return tree;
};

const testBuildTree = () => {
  const data = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
  const tree = new Tree(data);
  console.log(tree);
  tree.prettyPrint(tree.root);
};

const testFind = () => {
  const data = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
  const tree = new Tree(data);
  console.log(tree);
  tree.prettyPrint(tree.root);
  // console.log(tree.find(8));
  // console.log(tree.find(1));
  // console.log(tree.find(67));
  console.log(tree.find(6345));
};

const testLevelOrder = () => {
  const data = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
  const tree = new Tree(data);
  tree.prettyPrint(tree.root);
  console.log(tree.levelOrder());
};

const testPreOrder = () => {
  const data = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
  const tree = new Tree(data);
  tree.prettyPrint(tree.root);
  console.log(tree.preOrder());
};

const testPreOrderCallback = () => {
  const data = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
  const tree = new Tree(data);
  tree.prettyPrint(tree.root);
  tree.preOrder((node) => {
    console.log(node.data);
  });
};

const testInOrder = () => {
  const data = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
  const tree = new Tree(data);
  tree.prettyPrint(tree.root);
  console.log(tree.inOrder());
};

const testPostOrder = () => {
  const data = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
  const tree = new Tree(data);
  tree.prettyPrint(tree.root);
  console.log(tree.postOrder());
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
  console.log(`depth of 1 down = ${tree.depth(tree.root.left)}`);
};

// testBuildTree();
// testFind();
// testLevelOrder();
// testPreOrder();
// testPreOrderCallback();
// testInOrder();
// testPostOrder();
testHeight();
testDepth();
