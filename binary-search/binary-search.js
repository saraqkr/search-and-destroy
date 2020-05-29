'use strict';

// Complete this algo
const binarySearch = (array, target, firstIdx = 0, lastIdx = array.length) => {
	// len = 10 --> lastIdx = 9 --> centerIdx = 4
	// len = 9 --> lastIdx = 8 --> centerIdx = 4

	let center = Math.floor((firstIdx + lastIdx)/2)	// 12(6) -> 18(9) -> 19(10) -> 20(11)

	// if (target < array[0] || target > array[array.length - 1]) return false
	if (lastIdx < firstIdx) return false

// const test1 = [1,3,4,5,10,15,20,22,23,98,1000];
// target = 10

	if (target === array[center]) return true
	else if (array[center] > target) {
		lastIdx = center - 1		// 4
		return binarySearch(array, target, firstIdx, lastIdx)
	} else {
		firstIdx = center + 1		// firstIdx = 12
		return binarySearch(array, target, firstIdx, lastIdx)
	}
}

const binarySearch = (array, target) => {
	let startIdx = 0;
	let endIdx = array.length - 1;
	let centerIdx = Math.floor((startIdx + endIdx) / 2);
	while (startIdx < endIdx) {
		if (target === array[centerIdx]) return true;
		if (target < array[centerIdx]) {
			endIdx = centerIdx;
			centerIdx = Math.floor((startIdx + endIdx) / 2);
		} else {
			startIdx = centerIdx;
			centerIdx = Math.ceil((startIdx + endIdx) / 2);
		}
	}
	return false;
}





// const binarySearch = (array, target) => {
	// get the center index
	// compare target with that center
	// if (target === array[center]) return true

	// else

	// if target < center, binarySearch(array, target) (if we were to use recursion, split array into two subarrays && Vicky found another way to use recursion without creating new arrays!)

	// get a new center between far left index & current center, and compare target with the new center element
// };




/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
