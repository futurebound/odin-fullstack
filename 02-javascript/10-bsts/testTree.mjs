'use strict';

import Tree from './Tree.mjs';

const testBuildTree = () => {
  const data = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
  const tree = new Tree(data);
  console.log(tree);
  tree.prettyPrint(tree.root);
};

const testLevelOrder = () => {
  const data = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
  const tree = new Tree(data);
  tree.prettyPrint(tree.root);
  console.log(tree.levelOrder());
};

const testInOrder = () => {
  const data = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
  const tree = new Tree(data);
  tree.prettyPrint(tree.root);
  console.log(tree.inOrder());
};

// testBuildTree();
// testLevelOrder();
testInOrder();
