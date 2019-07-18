"use strict";

module.exports = multiply;

const multiply = (...x) => {
  return x.reduce((acc, val) => acc * val);
};
