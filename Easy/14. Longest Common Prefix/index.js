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

const case1 = lcpiteration1(["flower", "flow", "flight"]);
console.log(case1);
console.assert(case1 === "fl", "Case 1 === 'fl'");

const case2 = lcpiteration1(["dog", "racecar", "car"]);
console.log(case2);
console.assert(case2 === "", "Case 2 === ''");

const case3 = lcpiteration1(["ab", "a"]);
console.log(case3);
console.assert(case3 === "a", "Case 3 === 'a'");
