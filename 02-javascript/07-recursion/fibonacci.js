'use strict';

const fibs = (n) => {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  }

  let output = [0, 1];
  let first = output[0];
  let second = output[1];

  for (let i = 2; i < n; i++) {
    output[i] = first + second;
    first = second;
    second = output[i];
  }

  return output;
};

// console.log('Testing iterative fibs():');
// console.log(fibs(-1));
// console.log(fibs(0));
// console.log(fibs(1));
// console.log(fibs(2));
// console.log(fibs(3));
// console.log(fibs(8));

const fibsRec = (n) => {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  }

  let output = [0, 1];
  for (let i = 2; i < n; i++) {
    output.push(fibsRecHelper(i));
  }
  return output;
};

const fibsRecHelper = (n) => {
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  return fibsRecHelper(n - 1) + fibsRecHelper(n - 2);
};

console.log('Testing recursive fibsRec():');
console.log(fibsRec(-1));
console.log(fibsRec(0));
console.log(fibsRec(1));
console.log(fibsRec(2));
console.log(fibsRec(3));
console.log(fibsRec(8));
