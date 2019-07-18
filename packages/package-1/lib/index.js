"use strict";

module.exports = { sum, minus };
/**
 * This is a function which would take an arbitrary number of parameters
 * and return the sume of those as int
 * @param  {...any} x
 */
const sum = (...x) => {
  return x.reduce((acc, val) => acc + parseInt(val));
};

const minus = (x, y) => x - y;
