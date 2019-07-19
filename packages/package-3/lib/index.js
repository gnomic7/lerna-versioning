"use strict";

module.exports = multiply;

/**
 * This funciton will return the product of every number passed as param
 * Will add more logic to this function in future
 * @param  {...any} x any number of params
 */
const multiply = (...x) => {
  return x.reduce((acc, val) => acc * val);
};
