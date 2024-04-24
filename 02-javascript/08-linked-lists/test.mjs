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

// testAppend();
// testPrepend();
// testSize();
// testHead();
// testTail();
// testAt();
testPop();
