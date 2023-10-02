import TestingSuite from "../../suite.js";

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
	return (
		n > 0 && Number.isInteger(Math.log2(n)) && /^10*$/.test(n.toString(2))
	);
};

const test = new TestingSuite(isPowerOfTwo, [
	{
		input: [1],
		output: true,
	},
	{
		input: [16],
		output: true,
	},
	{
		input: [3],
		output: false,
	},
	{
		input: [4],
		output: true,
	},
	{
		input: [5],
		output: false,
	},
]);

test.setName("isPowerOfTwo");
test.debugName();
test.run();

export { test as test231, isPowerOfTwo };
