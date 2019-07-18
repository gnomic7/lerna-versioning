"use strict";

module.exports = multiply;

const multiply = (...x) => {
  return x.reduce((acc, val) => acc * val);
};

console.log(
  `Updating dependency package to see how it updates the dependent pages`
);
