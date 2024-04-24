'use strict';

import HashMap from './HashMap.mjs';

const testSet = () => {
  const map = new HashMap();
  map.set('a', 'aaa');
  console.log(map);
};

const testGet = () => {
  const map = new HashMap();
  console.log(map.get('hi'));
};

testSet();
// testGet();
