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

/**
 * This function just returns the difference between x and y
 * @param {int} x first parameter
 * @param {int} y second parameter
 */
const minus = (x, y) => parseInt(x) - parseInt(y);
