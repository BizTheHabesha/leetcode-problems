import _ from "lodash";
import TestingSuite from "../../suite.js";
/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (s) {};

const test = new TestingSuite(reorganizeString, [
	{
		input: ["aab"],
		output: "aba",
	},
	{
		input: ["aaab"],
		output: "",
	},
]);

test.setName("reorganizeString");

export { test as test767, reorganizeString };
