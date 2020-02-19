"use strict";

// Complete this algo
const split = array => {
  let middle = Math.floor(array.length / 2);
  let leftArr = array.slice(0, middle);
  let rightArr = array.slice(middle);
  return [leftArr, rightArr];
};

const binarySearch = (array, target) => {
  if (array.length === 1) {
    return target === array[0];
  }
  let splitArr = split(array);

  let left = splitArr[0];
  let right = splitArr[1];

  if (left.includes(target)) {
    return binarySearch(left, target);
  } else if (right.includes(target)) {
    return binarySearch(right, target);
  }
  return false;
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
