import TestingSuite from "../../suite.js";

/**
 * You are given an array of integers nums, there is a sliding window of size k which
 * is moving from the very left of the array to the very right.
 * You can only see the k numbers in the window.
 * Each time the sliding window moves right by one position.
 * Return the max sliding window.
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
	let max = [];
	for (let i = 0; i < nums.length - k + 1; i++) {
		max[i] = Math.max(...nums.slice(i, i + k));
	}
	return max;
};

const test = new TestingSuite(maxSlidingWindow, [
	{
		input: [[1, 3, -1, -3, 5, 3, 6, 7], 3],
		output: [3, 3, 5, 5, 6, 7],
	},
	{
		input: [[1], 1],
		output: [1],
	},
	{
		input: [[-7, -8, 7, 5, 7, 1, 6, 0], 50000],
		output: [7],
	},
]);

test.setName("maxSlidingWindow");
test.debugName();
test.run();

export { test as test239, maxSlidingWindow };
