"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _chalk = _interopRequireDefault(require("chalk"));
var _lodash = _interopRequireDefault(require("lodash"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 *
 * @param {Function} func
 * @param {{input: any, output: any}} tests
 */
var suite = function suite(func, tests) {
  var count = 0;
  tests.forEach(function (test) {
    count++;
    var input = test.input,
      output = test.output;
    var result = func(input);
    var isEqual = _lodash["default"].isEqual(result, output);
    var color = isEqual ? "green" : "red";
    var message = isEqual ? "passed" : "failed";
    console.log(_chalk["default"]["white"]("~~~ Test ".concat(count, " ").concat(message, " ~~~")));
    console.log(_chalk["default"][color]("input: ".concat(input, ", output: ").concat(result)));
    isEqual ? null : console.log(_chalk["default"][color]("expected: ".concat(output)));
    console.log(_chalk["default"]["white"]("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"));
  });
};
var _default = suite;
exports["default"] = _default;