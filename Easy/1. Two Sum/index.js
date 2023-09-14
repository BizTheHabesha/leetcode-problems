import TestingSuite from "../../suite.js";

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

const test = new TestingSuite(twoSum, [
	{
		input: [[2, 7, 11, 15], 9],
		output: [0, 1],
	},
	{
		input: [[3, 2, 4], 6],
		output: [1, 2],
	},
	{
		input: [[3, 3], 6],
		output: [0, 1],
	},
]);
test.setName("twoSum");

export { test as test1, twoSum };
