'use strict';

const mergeSort = (arr) => {
  // base case -> a single item array
  if (arr.length <= 1) {
    return arr;
  }

  // sort left half
  // sort right half
  const midpoint = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, midpoint));
  let right = mergeSort(arr.slice(midpoint, arr.length));

  // merge sorted halves
  let output = [];
  let leftIndex = 0;
  let rightIndex = 0;
  for (let i = 0; i < left.length + right.length; i++) {
    if (rightIndex >= right.length || left[leftIndex] < right[rightIndex]) {
      output[i] = left[leftIndex];
      leftIndex++;
    } else if (
      leftIndex >= left.length ||
      left[leftIndex] >= right[rightIndex]
    ) {
      output[i] = right[rightIndex];
      rightIndex++;
    }
  }

  return output;
};

console.log('Testing mergeSort()');
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
