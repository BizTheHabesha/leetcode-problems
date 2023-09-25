import TestingSuite from "../../suite.js";

/**Given an integer n, return the number of trailing zeroes in n!.
Note that n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1.
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
	let count = 0;
	while (n > 0) {
		n = Math.floor(n / 5);
		count += n;
	}
	return count;
};

const test = new TestingSuite(trailingZeroes, [
	{ input: [3], output: 0 },
	{ input: [5], output: 1 },
	{ input: [0], output: 0 },
]);

test.setName("trailingZeroes");
test.debugName();
test.run();

export { test as test172, trailingZeroes };
