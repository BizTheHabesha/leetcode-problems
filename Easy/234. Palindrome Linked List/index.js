import TestingSuite from "../../suite.js";
import ListNode from "../../utils/data-structures/listnode.js";

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {};

const test = new TestingSuite(isPalindrome, [
	{
		input: [new ListNode(1, new ListNode(2))],
		output: false,
	},
	{
		input: [
			new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1)))),
		],
		output: true,
	},
]);

test.debugName();
test.run();

export { test as test234, isPalindrome as isPalindromeLinkedList };
