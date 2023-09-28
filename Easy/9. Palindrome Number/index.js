import TestingSuite from "../../suite.js";
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
	if (Math.sign(x) === -1) return false;
	if (x < 10) return true;
	const len = Math.ceil(Math.log(x + 1) / Math.LN10);
	let end = len;
	for (let i = 1; i <= Math.ceil(len / 2); i++) {
		const fromStart = Math.floor((x / Math.pow(10, i - 1)) % 10);
		const fromEnd = Math.floor((x / Math.pow(10, end - 1)) % 10);
		if (fromStart !== fromEnd) return false;
		end--;
	}
	return true;
};

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
	const str = x.toString();
	let end = str.length - 1;
	for (let i = 0; i < Math.ceil(str.length / 2); i++) {
		if (str.charAt(i) !== str.charAt(end)) return false;
		end--;
	}
	return true;
};
const test = new TestingSuite(isPalindrome, [
	{
		input: [121],
		output: true,
	},
	{
		input: [-121],
		output: false,
	},
	{
		input: [10],
		output: false,
	},
	{
		input: [-101],
		output: false,
	},
	{
		input: [5],
		output: true,
	},
	{
		input: [1221],
		output: true,
	},
	{
		input: [1234],
		output: false,
	},
]);

test.setName("isPalindrome");
test.debugName();
test.run();

export { test as test9, isPalindrome };
