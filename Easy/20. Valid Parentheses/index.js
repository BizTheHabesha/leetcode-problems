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

console.log(`CASE 1\n`);
const case1var = "()";
const case1 = isValid(case1var);
console.assert(case1, `Case 1 ${case1var} should have been true!`);
console.log("~~~~~~\n");

console.log(`CASE 2\n`);
const case2var = "()[]{}";
const case2 = isValid(case2var);
console.assert(case2, `Case 2 ${case2var} should have been true!`);
console.log("~~~~~~\n");

console.log(`CASE 3\n`);
const case3var = "(]";
const case3 = isValid(case3var);
console.assert(!case3, `Case 3 ${case3var} should have been false!`);
console.log("~~~~~~\n");

console.log(`CASE 4\n`);
const case4var = "((";
const case4 = isValid(case4var);
console.assert(!case4, `Case 4 ${case4var} should have been false!`);
console.log("~~~~~~\n");
