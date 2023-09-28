import TestingSuite from "../../suite.js";

/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
	let product = true;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === 0) return 0;
		nums[i] < 0 ? (product = !product) : null;
	}
	return product ? 1 : -1;
};

const test = new TestingSuite(arraySign, [
	{
		input: [[-1, -2, -3, -4, 3, 2, 1]],
		output: 1,
	},
	{
		input: [[1, 5, 0, 2, -3]],
		output: 0,
	},
	{
		input: [[-1, 1, -1, 1, -1]],
		output: -1,
	},
]);

test.setName("arraySign");
test.debugName();
test.run();

export { test as test1822, arraySign };
