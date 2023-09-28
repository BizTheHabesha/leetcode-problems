import TestingSuite from "../../suite.js";
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
	if (numRows === 0) return [];
	let triangle = [[1]];
	for (let n = 1; n < numRows; n++) {
		let row = [];
		let prevRow = triangle[n - 1];
		for (let i = 0; i <= n; i++) {
			let left = prevRow[i - 1] || 0;
			let right = prevRow[i] || 0;
			row.push(left + right);
		}
		triangle.push(row);
	}
	return triangle;
};

const test = new TestingSuite(generate, [
	{
		input: [5],
		output: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]],
	},
	{ input: [1], output: [[1]] },
	{ input: [0], output: [] },
	{ input: [2], output: [[1], [1, 1]] },
	{ input: [3], output: [[1], [1, 1], [1, 2, 1]] },
]);

test.setName("pascalsTriangle");
test.debugName();
test.run();

export { test as test118, generate as pascalsTriangle };
