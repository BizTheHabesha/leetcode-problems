import TestingSuite from "../../suite.js";
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	let maxProfit = 0;
	let buy = {
		0: prices[0],
		1: 0,
	};
	let sell = {
		0: 0,
		1: 0,
	};
	for (let i = 0; i < prices.length; i++) {
		let num = prices[i];
		if (num < buy[0]) {
			if (sell[0] - buy[0] > maxProfit && buy[1] < sell[1]) {
				maxProfit = sell[0] - buy[0];
				console.log(`Max Profit is now ${maxProfit}`);
			}
			buy[0] = num;
			buy[1] = i;
			sell[0] = 0;
			sell[1] = 0;
		}
		if (num > sell[0] && i > buy[1]) {
			sell[0] = num;
			sell[1] = i;
			if (sell[0] - buy[0] > maxProfit && buy[1] < sell[1]) {
				console.log(`Max Profit is now ${maxProfit} duplicate?`);
				maxProfit = sell[0] - buy[0];
			}
		}
	}
	return maxProfit > 0 ? maxProfit : 0;
};
const test = new TestingSuite(maxProfit, [
	{ input: [7, 1, 5, 3, 6, 4], output: 7 },
	{ input: [1, 2, 3, 4, 5], output: 4 },
	{ input: [7, 6, 4, 3, 1], output: 0 },
]);

test.setName("maxProfit");
test.debugName();
test.run();

export { test as test122, maxProfit };
