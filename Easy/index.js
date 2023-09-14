import { test1, twoSum } from "./1. Two Sum/index.js";
import { test9, isPalindrome } from "./9. Palindrome Number/index.js";
import {
	test14,
	longestCommonPrefix,
} from "./14. Longest Common Prefix/index.js";
import { test20, isValid } from "./20. Valid Parentheses/index.js";
import { test118, pascalsTriangle } from "./118. Pascal's Triangle/index.js";
import {
	test1822,
	arraySign,
} from "./1822. Sign of the Product of an Array/index.js";

test1.debugName();
test1.run();

test9.debugName();
test9.run();

test14.debugName();
test14.run();

test20.debugName();
test20.run();

test118.debugName();
test118.run();

test1822.debugName();
test1822.run();

export const tests = {
	1: test1,
	9: test9,
	14: test14,
	1822: test1822,
};
