"use strict";
const { sum, minus } = require("@gnomic7/package-1");
const { multiply } = require("@gnomic7/package-3");
module.exports = oddNumbers;

const oddNumbers = (limit = 100) => {
  console.log(sum(1, 2, 4));
  console.log(multiply(2, 3, 4));
  console.log(minus(200, 4));
  console.log(`Getting you the odd numbers less than ${limit} soon!`);
};
