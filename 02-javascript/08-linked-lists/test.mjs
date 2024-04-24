'use strict';

import LinkedList from './LinkedList.mjs';

const testAppend = () => {
  const list = new LinkedList();
  list.append(1);
  console.log(list.toString());
  list.append(2);
  console.log(list.toString());
  list.append(3);
  console.log(list.toString());
};

const testPrepend = () => {
  const list = new LinkedList();
  list.prepend(1);
  console.log(list.toString());
  list.prepend(2);
  console.log(list.toString());
  list.prepend(3);
  console.log(list.toString());
};

const testSize = () => {
  const list = new LinkedList();
  console.log(list.size);
  list.append(1);
  console.log(list.size);
  list.append(2);
  console.log(list.size);
};

const testHead = () => {
  const list = new LinkedList();
  console.log(list.head);
  list.append(1);
  console.log(list.head);
  list.append(2);
  console.log(list.head);
};

const testTail = () => {
  const list = new LinkedList();
  console.log(list.tail);
  list.append(1);
  console.log(list.tail);
  list.append(2);
  console.log(list.tail);
};

const testAt = () => {
  const list = new LinkedList();
  console.log(list.at(0));
  list.append(1);
  list.append(2);
  console.log(list.at(0));
  console.log(list.at(1));
  console.log(list.at(2));
};

const testPop = () => {
  const list = new LinkedList();
  console.log(list.toString());
  console.log(list.pop());
  console.log(list.toString());

  list.append(1);
  console.log(list.toString());
  console.log(list.pop());
  console.log(list.toString());

  list.append(1);
  list.append(2);
  list.append(3);
  console.log(list.toString());
  console.log(list.pop());
  console.log(list.toString());
};

const testContains = () => {
  const list = new LinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  console.log(list.contains(1));
  console.log(list.contains(3));
  console.log(list.contains(4));
  console.log(list.contains('three'));
};

const testFind = () => {
  const list = new LinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  console.log(list.toString());
  console.log(list.find(1));
  console.log(list.find(3));
  console.log(list.find(4));
  console.log(list.find('three'));
};

const testInsertAt = () => {
  const list = new LinkedList();
  list.insertAt(1, 0);
  console.log(list.toString());
  list.insertAt(2, 0);
  console.log(list.toString());
  list.insertAt(3, 1);
  console.log(list.toString());
  list.insertAt(4, 3);
  console.log(list.toString());
};

const testRemoveAt = () => {
  const list = new LinkedList();
  list.insertAt(1, 0);
  list.insertAt(2, 1);
  list.insertAt(3, 2);
  list.insertAt(4, 3);
  console.log(list.toString());

  console.log(list.removeAt(4));
  console.log(list.toString());

  console.log(list.removeAt(0));
  console.log(list.toString());

  console.log(list.removeAt(1));
  console.log(list.toString());

  console.log(list.removeAt(1));
  console.log(list.toString());

  list.append(3);
  list.append(4);
  console.log(list.toString());
  console.log(list.removeAt(2));
  console.log(list.toString());
};

// testAppend();
// testPrepend();
// testSize();
// testHead();
// testTail();
// testAt();
// testPop();
// testContains();
// testFind();
// testInsertAt();
testRemoveAt();
