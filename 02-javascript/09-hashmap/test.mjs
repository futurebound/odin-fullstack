'use strict';

import HashMap from './HashMap.mjs';

const testSet = () => {
  const map = new HashMap();
  map.set('Carlos', 'I am the old value');
  console.log(map.get('Carlos'));
  map.set('Carlos', 'I am the new value');
  console.log(map.get('Carlos'));
};

const testGet = () => {
  const map = new HashMap();
  console.log(map.get('Carlos'));

  map.set('Carlos', 'I am the old value');
  console.log(map.get('Carlos'));
};

// testSet();
testGet();
