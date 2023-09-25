import TestingSuite from "../../suite.js";
/**Given an integer n, count the total number of digit 1 appearing in all
 * non-negative integers less than or equal to n.
 *
 * NOTES: The digit 1 appears 20 times between 0 and 99. This repeats every 100. From there,
 * every power of 10 adds that power to the count. For example, 100 to 199 has 120 1's. 0 to 999
 * has 300 1's. This repeats every 1000. So, we can use this to our advantage. We can find the
 * highest power of 10 that is less than n. Then, we can find how many times that power of 10
 * appears in n. We can then add the number of 1's in that range to our count. Then, we can
 * subtract that power of 10 from n. We can repeat this process until n is 0.
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function (n) {
	let count = 0;
	let power = 1;
	while (n > 0) {
		const digit = Math.floor(n / 10);
		const remainder = n % 10;
		if (remainder === 0) {
			count += digit * power;
		} else if (remainder === 1) {
			count += digit * power + 1;
		} else {
			count += (digit + 1) * power;
		}
		n = Math.floor(n / 10);
		power *= 10;
	}
	return count;
};

const test = new TestingSuite(countDigitOne, [
	{ input: [13], output: 6 },
	{ input: [0], output: 0 },
	{ input: [1], output: 1 },
]);

test.setName("countDigitOne [UNFINISHED]");
test.debugName();
test.run();

export { test as test233, countDigitOne };
