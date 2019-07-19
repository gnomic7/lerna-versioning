"use strict";

module.exports = multiply;

/**
 * This funciton will return the product of every number passed as param
 *
 * @param {any} a extra message before multiplying
 * @param  {...any} x any number of params
 */
const multiply = (a, ...x) => {
  console.log(
    `Just an extra param which will be excluded from the product: ${a}`
  );
  return x.reduce((acc, val) => acc * val);
};
