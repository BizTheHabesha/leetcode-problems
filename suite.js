import chalk from "chalk";
import _ from "lodash";
/**
 *
 * @param {Function} func
 * @param {{input: any, output: any}} tests
 */
export const suite = (func, tests) => {
	let count = 0;
	tests.forEach((test) => {
		count++;
		const { input, output } = test;
		const result = func(input);
		const isEqual = _.isEqual(result, output);
		const color = isEqual ? "green" : "red";
		const message = isEqual ? "passed" : "failed";
		console.log(chalk["white"](`~~~ Test ${count} ${message} ~~~`));
		console.log(chalk[color](`input: ${input}, output: ${result}`));
		isEqual ? null : console.log(chalk[color](`expected: ${output}`));
		console.log(chalk["white"]("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"));
	});
};

/**
 * @class TestingSuite
 * @param {Function} func
 * @param {[...{input: any, output: any}]} tests
 * @property {Function} func
 * @property {[...{input: any, output: any}]} tests
 * @property {Number} count
 * @method addTest
 * @method run
 */
export default class TestingSuite {
	_critical = chalk.bgHex("#cf0b04").white;
	_error = chalk.bold.red;
	_success = chalk.bold.green;
	_warning = chalk.bold.yellow;
	_info = chalk.bold.blue;
	_debug = chalk.bold.magenta;
	_trace = chalk.bold.cyan;
	_static = chalk.bold.white;
	/**
	 *
	 * @param {any[]} inputs
	 * @returns
	 */
	_formatInputs(inputs) {
		const formatted = inputs.map((input) => {
			if (Array.isArray(input)) {
				return `[${input}]`;
			}
			if (typeof input === "string") {
				return `"${input}"`;
			}
			return input;
		});
		return formatted.join(", ");
	}
	_suite() {
		let localCount = 0;
		let passed = 0;
		let failed = [];
		this.tests.forEach((test) => {
			localCount++;
			const { input, output } = test;
			const result = this.func(...input);
			const isEqual = _.isEqual(result, output);
			passed += isEqual;
			isEqual ? null : failed.push({ input, output, result, localCount });
		});
		failed.length > 0
			? console.log(
					"  " +
						this._debug(`${failed.length} tests failed `) +
						this._critical("!")
			  )
			: console.log(this._success(`  All ${this.count} tests passed!\n`));
		failed.forEach((test) => {
			const { input, output, result, localCount } = test;
			console.log(this._static("   |"));
			console.log(this._static(`   | Test ${localCount} failed`));
			console.log(
				this._static(`   |`),
				this._error(
					` inputs: ${this._formatInputs(
						input
					)}, output: ${JSON.stringify(result)}`
				)
			);
			console.log(
				this._static(`   |`),
				this._error(` expected: ${output}`)
			);
			console.log(this._static("   |"));
		});
		const ppassed = ((passed / this.count) * 100).toFixed(2);
		const color =
			ppassed == 100
				? this._success
				: ppassed >= 70
				? this._warning
				: this._error;
		ppassed < 100
			? console.log(
					this._static(
						`  Passed ${passed} out of ${this.count} tests (`
					) +
						color(`${ppassed}%`) +
						this._static(`)\n`)
			  )
			: null;
	}

	/**
	 *
	 * @constructor
	 * @param {Function} func A function to test
	 * @param {[...{inputs: [any], output: any}]} tests An array of objects with input and output properties. The input property is the input to the function and the output property is the expected output.
	 */
	constructor(func, tests = []) {
		typeof func === "";
		this.func = func;
		this.tests = tests;
		this.tests.length === 0
			? console.log(
					this._error("No tests provided or tests are invalid!")
			  )
			: null;
		this.count = tests.length;
	}
	/**
	 *
	 * @param {any[]} input an input to provide to the function
	 * @param {any} output the expected output of the function given the input
	 */
	addTest(input, output) {
		this.tests.push({ input, output });
		this.count++;
	}

	run() {
		console.log(this._info(`  Found ${this.count} tests...`));
		this._suite();
	}
	/**
	 *
	 * @param {string} name optional name of the test suite
	 */
	setName(name) {
		this.name = name;
	}
	/**
	 *
	 * @returns {string} name of the test suite
	 */
	getName() {
		return this.name;
	}
	debugName() {
		console.log(this._debug(`Running ${this.name} tests...`));
	}
	async runAsync() {
		console.log(this._info(`Running ${this.count} tests...`));
		setTimeout(() => {
			this._suite();
		}, 0);
	}
}
