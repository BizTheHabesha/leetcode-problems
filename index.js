import TestingSuite from "./suite.js";

const suite = new TestingSuite(
	(input) => (input === "fail" ? "no fail" : input),
	[
		{ input: ["hello"], output: "hello" },
		{ input: ["world"], output: "world" },
		{ input: ["hello world"], output: "hello world" },
		{ input: ["hello"], output: "hello" },
		{ input: ["world"], output: "world" },
		{ input: ["hello world"], output: "hello world" },
		{ input: ["hello"], output: "hello" },
		{ input: ["world"], output: "world" },
		{ input: ["hello world"], output: "hello world" },
		{ input: ["hello"], output: "hello" },
		{ input: ["world"], output: "world" },
		{ input: ["hello world"], output: "hello world" },
		{ input: ["hello"], output: "hello" },
		{ input: ["world"], output: "world" },
		{ input: ["hello world"], output: "hello world" },
		{ input: ["hello"], output: "hello" },
		{ input: ["world"], output: "world" },
		{ input: ["hello world"], output: "hello world" },
		{ input: ["hello"], output: "hello" },
		{ input: ["world"], output: "world" },
		{ input: ["hello world"], output: "hello world" },
		{ input: ["fail"], output: "no fail" },
	]
);

suite.setName("Test Suite");

suite.debugName();
suite.run();
