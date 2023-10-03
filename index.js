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
	],
	"Test Suite"
);

const failSuite = new TestingSuite(
	"fail",
	[{ input: ["hello"], output: "hello" }],
	"failSuite"
);

suite.debugName();
suite.run();

failSuite.debugName();
failSuite.run();
