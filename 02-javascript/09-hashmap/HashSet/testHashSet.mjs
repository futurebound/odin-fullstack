'use strict';

import HashSet from './HashSet.mjs';

const testSet = () => {
  const set = new HashSet();
  set.set('Carlos');
  console.log(set.get('Carlos'));
  set.set('Carlos');
  console.log(set.get('Carlos'));
  set.set('Carla');
  console.log(set.get('Carla'));
  console.log(set);
};

const testSetExpandsTable = () => {
  const set = new HashSet();
  set.set('Arlos');
  set.set('Brlos');
  set.set('Crlos');
  set.set('Drlos');
  set.set('Erlos');
  set.set('Frlos');
  set.set('Grlos');
  set.set('Hrlos');
  set.set('Irlos');
  set.set('Jrlos');
  set.set('Krlos');
  set.set('Lrlos');
  console.log(set);

  set.set('Mrlos');
  console.log(set);
};

const testContains = () => {
  const set = new HashSet();
  console.log(set.contains('Carlos'));

  set.set('Carlos');
  console.log(set.contains('Carlos'));
};

const testRemove = () => {
  const set = new HashSet();
  set.set('Carlos');
  set.set('Carla');
  console.log(set);
  console.log(set.remove('Carlos'));
  console.log(set);
};

const testLength = () => {
  const set = new HashSet();
  console.log(set.length());
  set.set('Carlos');
  console.log(set.length());
  set.set('Carla');
  console.log(set.length());
};

const testClear = () => {
  const set = new HashSet();
  set.set('Carlos');
  set.set('Carla');
  console.log(set);
  console.log(`pre-clear length: ${set.length()}`);
  set.clear();
  console.log(set);
  console.log(`post-clear length: ${set.length()}`);
};

const testKeys = () => {
  const set = new HashSet();
  console.log(set.keys());
  set.set('Carlos');
  set.set('Carla');
  console.log(set.keys());
};

// testSet();
// testSetExpandsTable();
// testGet();
// testContains();
// testRemove();
// testLength();
testClear();
// testKeys();
