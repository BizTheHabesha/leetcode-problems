import _ from "lodash";
import suite from "./suite.js";
/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (s) {};

suite(reorganizeString, [
	{ input: "aab", output: "aba" },
	{ input: "aaab", output: "" },
	{ input: "vvvlo", output: "vlvov" },
]);

console.log("~fin~");
