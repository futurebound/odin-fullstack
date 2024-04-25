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

const testSetExpandsTable = () => {
  const map = new HashMap();
  map.set('Arlos', '1');
  map.set('Brlos', '2');
  map.set('Crlos', '3');
  map.set('Drlos', '4');
  map.set('Erlos', '5');
  map.set('Frlos', '6');
  map.set('Grlos', '7');
  map.set('Hrlos', '8');
  map.set('Irlos', '9');
  map.set('Jrlos', '10');
  map.set('Krlos', '11');
  map.set('Lrlos', '12');
  console.log(map);

  map.set('Mrlos', '13');
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

testSet();
testSetExpandsTable();
testGet();
testHas();
testRemove();
testLength();
testClear();
testKeys();
testValues();
testEntries();
