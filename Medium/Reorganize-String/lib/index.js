"use strict";

var _lodash = _interopRequireDefault(require("lodash"));
var _suite = _interopRequireDefault(require("./suite"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function reorganizeString(s) {
  return "";
};
(0, _suite["default"])(reorganizeString, [{
  input: "aab",
  output: "aba"
}, {
  input: "aaab",
  output: ""
}, {
  input: "vvvlo",
  output: "vlvov"
}]);
console.log("end of program");