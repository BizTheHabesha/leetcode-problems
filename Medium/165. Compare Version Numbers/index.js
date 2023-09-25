import TestingSuite from "../../suite.js";
/**
 * Given two version numbers, version1 and version2, compare them.
Version numbers consist of one or more revisions joined by a dot '.'. Each revision consists 
of digits and may contain leading zeros. Every revision contains at least one character. 
Revisions are 0-indexed from left to right, with the leftmost revision being revision 0, the 
next revision being revision 1, and so on. For example 2.5.33 and 0.1 are valid version numbers.

To compare version numbers, compare their revisions in left-to-right order. Revisions are 
compared using their integer value ignoring any leading zeros. This means that revisions 
1 and 001 are considered equal. If a version number does not specify a revision at an index, 
then treat the revision as 0. For example, version 1.0 is less than version 1.1 because their 
revision 0s are the same, but their revision 1s are 0 and 1 respectively, and 0 < 1.

Return the following:

If version1 < version2, return -1.
If version1 > version2, return 1.
Otherwise, return 0.
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
	const split1 = version1.split(".");
	const split2 = version2.split(".");
	const len = Math.max(split1.length, split2.length);
	for (let i = 0; i < len; i++) {
		const num1 = parseInt(split1[i]) || 0;
		const num2 = parseInt(split2[i]) || 0;
		if (num1 > num2) return 1;
		if (num1 < num2) return -1;
	}
	return 0;
};

const test = new TestingSuite(compareVersion, [
	{
		input: ["1.01", "1.001"],
		output: 0,
	},
	{
		input: ["1.0", "1.0.0"],
		output: 0,
	},
	{
		input: ["0.1", "1.1"],
		output: -1,
	},
	{
		input: ["1.0.1", "1"],
		output: 1,
	},
]);

test.setName("compareVersion");
test.debugName();
test.run();

export { test as test165, compareVersion };
