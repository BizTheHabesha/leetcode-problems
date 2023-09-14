import TestingSuite from "../../suite.js";
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
	let prefix = strs[0];
	for (let str of strs) {
		if (str === strs[0]) continue;
		for (let i = 0; i <= str.length + 1; i++) {
			if (str.substring(0, i) !== prefix.substring(0, i)) {
				prefix = str.substring(0, i - 1);
				break;
			}
			if (prefix === "") return prefix;
		}
	}
	return prefix;
};
/**
 * @param {string[]} strs
 * @return {string}
 */
var lcpiteration1 = function (strs) {
	let prefix = strs[0];
	if (prefix === "") return "";
	for (let str of strs) {
		if (str === strs[0]) continue;
		for (let i = 0; i <= str.length + 1; i++) {
			if (str.charAt(i) !== prefix.charAt(i)) {
				return str.substring(0, i - 2);
			}
		}
		if (prefix === "") return prefix;
	}
	return "";
};

const test = new TestingSuite(lcpiteration1, [
	{
		input: [["flower", "flow", "flight"]],
		output: "fl",
	},
	{
		input: [["dog", "racecar", "car"]],
		output: "",
	},
	{
		input: [["ab", "a"]],
		output: "a",
	},
]);

test.setName("longestCommonPrefix");

export { test as test14, lcpiteration1 as longestCommonPrefix };
