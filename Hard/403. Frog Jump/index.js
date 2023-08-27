import TestingSuite from "../../suite.js";

/** DESCRIPTION (https://leetcode.com/problems/frog-jump/)
    A frog is crossing a river. The river is divided into some number of units, and at each unit, 
    there may or may not exist a stone. The frog can jump on a stone, but it must not jump into the water.
    Given a list of stones' positions (in units) in sorted ascending order, determine if the frog can 
    cross the river by landing on the last stone. Initially, the frog is on the first stone and assumes 
    the first jump must be 1 unit. If the frog's last jump was k units, its next jump must be either 
    k - 1, k, or k + 1 units. The frog can only jump in the forward direction.
 */

/** NOTES
 * The frog can skip stones, but it can't jump backwards. So the frog can jump to any stone in front of it
 * that fits the criteria. This criteria in fact limits our options because of three facts. Firstly, stones
 * cannot be in the same place (i.e. no consecutive duplicates). Secondly, the stones are sorted in ascending
 * order. Thirdly, the frog can only jump forwards. These three facts mean that the frog can only jump to a
 * stone that is at most one unit away from the previous stone. This means we can, at most, skip one stone.
 */

/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function (stones) {
	let unitsJumped = 1;
	for (let i = 1; i < stones.length; i++) {
		const curr = stones[i];
		const prev = stones[i - 1];
		const diff = curr - prev;
		if (diff > unitsJumped + 1) return false;
		if (diff < unitsJumped - 1) return false;
		unitsJumped = diff;
	}
	return true;
};

const suite = new TestingSuite(canCross, [
	{ input: [0, 1, 3, 5, 6, 8, 12, 17], output: true },
	{ input: [0, 1, 2, 3, 4, 8, 9, 11], output: false },
]);

suite.run();
