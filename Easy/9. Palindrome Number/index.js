/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
	if (Math.sign(x) === -1) return false;
	if (x < 10) return true;
	const len = Math.ceil(Math.log(x + 1) / Math.LN10);
	let end = len;
	for (let i = 1; i <= Math.ceil(len / 2); i++) {
		const fromStart = Math.floor((x / Math.pow(10, i - 1)) % 10);
		const fromEnd = Math.floor((x / Math.pow(10, end - 1)) % 10);
		if (fromStart !== fromEnd) return false;
		end--;
	}
	return true;
};

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
	const str = x.toString();
	let end = str.length - 1;
	for (let i = 0; i < Math.ceil(str.length / 2); i++) {
		if (str.charAt(i) !== str.charAt(end)) return false;
		end--;
	}
	return true;
};

const case1var = 121;
const case1 = isPalindrome(121);
console.log(`Case 1 : ${case1var} : ${case1}`);
console.assert(true, case1, "Case 1 failed");

const case2var = -121;
const case2 = isPalindrome(-121);
console.log(`Case 2 : ${case2var} : ${case2}`);
console.assert(true, !case2, "Case 2 failed");

const case3var = 5;
const case3 = isPalindrome(5);
console.log(`Case 3 : ${case3var} : ${case3}`);
console.assert(true, case3, "Case 3 failed");

const case4var = 10;
const case4 = isPalindrome(case4var);
console.log(`Case 4 : ${case4var} : ${case4}`);
console.assert(true, !case4, "Case 4 failed");

const case5var = 1221;
const case5 = isPalindrome(case5var);
console.log(`Case 5 : ${case5var} : ${case5}`);
console.assert(true, case5, "Case 5 failed");

const case6var = 1234;
const case6 = isPalindrome(case6var);
console.log(`Case 6 : ${case6var} : ${case6}`);
console.assert(true, !case6, "Case 6 failed");
