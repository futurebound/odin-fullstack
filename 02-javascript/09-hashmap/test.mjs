'use strict';

import HashMap from './HashMap.mjs';

const testSet = () => {
  const map = new HashMap();
  map.set('Carlos', 'I am the old value');
  console.log(map.get('Carlos'));
  map.set('Carlos', 'I am the new value');
  console.log(map.get('Carlos'));
  map.set('Carla', 'Carla cares man');
  console.log(map.get('Carla'));
  console.log(map);
};

const testGet = () => {
  const map = new HashMap();
  console.log(map.get('Carlos'));

  map.set('Carlos', 'I am the old value');
  console.log(map.get('Carlos'));
};

const testHas = () => {
  const map = new HashMap();
  console.log(map.has('Carlos'));

  map.set('Carlos', 'I am the old value');
  console.log(map.has('Carlos'));
};

const testRemove = () => {
  const map = new HashMap();
  map.set('Carlos', 'I am the old value');
  map.set('Carla', 'I am Carla value');
  console.log(map);
  console.log(map.remove('Carlos'));
  console.log(map);
};

const testLength = () => {
  const map = new HashMap();
  console.log(map.length());
  map.set('Carlos', 'I am the old value');
  console.log(map.length());
  map.set('Carla', 'I am Carla value');
  console.log(map.length());
};

const testClear = () => {
  const map = new HashMap();
  map.set('Carlos', 'I am the old value');
  map.set('Carla', 'I am Carla value');
  console.log(map);
  console.log(`pre-clear length: ${map.length()}`);
  map.clear();
  console.log(map);
  console.log(`post-clear length: ${map.length()}`);
};

const testKeys = () => {
  const map = new HashMap();
  console.log(map.keys());
  map.set('Carlos', 'I am the old value');
  map.set('Carla', 'I am Carla value');
  console.log(map.keys());
};

const testValues = () => {
  const map = new HashMap();
  console.log(map.values());
  map.set('Carlos', 'I am the old value');
  map.set('Carla', 'I am Carla value');
  console.log(map.values());
};

const testEntries = () => {
  const map = new HashMap();
  console.log(map.entries());
  map.set('Carlos', 'I am the old value');
  map.set('Carla', 'I am Carla value');
  console.log(map.entries());
};

// testSet();
// testGet();
// testHas();
// testRemove();
// testLength();
// testClear();
// testKeys();
// testValues();
testEntries();
