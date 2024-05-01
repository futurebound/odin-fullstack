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
  const data = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
  const tree = new Tree(data);
  tree.prettyPrint(tree.root);
  console.log(tree.height(tree.root));
};

// testBuildTree();
// testLevelOrder();
// testPreOrder();
testPreOrderCallback();
// testInOrder();
// testPostOrder();
// testHeight();
