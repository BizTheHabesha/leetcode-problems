import TestingSuite from "../../suite.js	";

class Stack {
	// default value allows stack to initialize without an argument
	constructor(container = []) {
		this.container = container;
	}

	// adds an element to the top of the stack
	addToStack(el) {
		return this.container.push(el);
	}

	// removes an element from the top of the stack
	removeFromStack() {
		return this.container.pop();
	}
}
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	let stack = new Stack();
	let map = { "(": ")", "{": "}", "[": "]" };
	if (s.length % 2 !== 0) return false;
	for (let i = 0; i < s.length; i++) {
		let thischar = s.charAt(i);
		switch (thischar) {
			case "(":
				stack.addToStack(thischar);
				break;
			case "{":
				stack.addToStack(thischar);
				break;
			case "[":
				stack.addToStack(thischar);
				break;
			default:
				if (thischar !== map[stack.removeFromStack()]) {
					return false;
				}
				break;
		}
	}
	if (!!stack.removeFromStack()) return false;
	return true;
};

const test = new TestingSuite(isValid, [
	{
		input: ["()"],
		output: true,
	},
	{
		input: ["()[]{}"],
		output: true,
	},
	{
		input: ["(]"],
		output: false,
	},
	{
		input: ["(("],
		output: false,
	},
	{
		input: ["{[]}"],
		output: true,
	},
	{
		input: ["{[]}]"],
		output: false,
	},
	{
		input: ["{[]}}"],
		output: false,
	},
]);

test.setName(isValid.name);
test.debugName();
test.run();

export { test as test20, isValid };
