import chalk from "chalk";
import _ from "lodash";
/**
 *
 * @param {Function} func
 * @param {{input: any, output: any}} tests
 */
const suite = (func, tests) => {
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

export default suite;
