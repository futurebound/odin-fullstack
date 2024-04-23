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

testAppend();
