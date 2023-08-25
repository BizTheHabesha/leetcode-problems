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

const case1 = maxProfit([7, 1, 5, 3, 6, 4]);
console.log(`Case 1: [7,1,5,3,6,4] => 7 ? ${case1} `);
console.assert(case1 === 7, "Case 1 Expected 7\n");

const case2 = maxProfit([1, 2, 3, 4, 5]);
console.log(`Case 2: [1,2,3,4,5] => 4 ? ${case2}`);
console.assert(case2 === 4, "Case 2 Expected 4\n");

const case3 = maxProfit([7, 6, 4, 3, 1]);
console.log(`Case 3: [7,6,4,3,1] => 0 ? ${case3}`);
console.assert(case3 === 0, "Case 3 Expected 0\n");
