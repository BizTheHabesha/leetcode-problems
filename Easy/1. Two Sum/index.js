/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	let retval = [];
	nums.forEach((num1, i1) => {
		let _target = target - num1;
		nums.forEach((num2, i2) => {
			if (i1 === i2) return;
			if (_target - num2 === 0) {
				retval = [i2, i1];
			}
		});
	});
	return retval;
};

/**
 *
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {boolean}
 */
var arrEq = function (arr1, arr2) {
	let reval = true;
	arr1.every((n, i, arr) => {
		if (n !== arr2[i]) reval = false;
	});
	return reval;
};

const case1 = arrEq(twoSum([2, 7, 11, 15], 9), [0, 1]);
console.assert(case1, "Test 1 failed");

const case2 = arrEq(twoSum([3, 2, 4], 6), [1, 2]);
console.assert(case2, "Test 2 failed");

const case3 = arrEq(twoSum([3, 3], 6), [0, 1]);
console.assert(case3, "Test 3 failed");
