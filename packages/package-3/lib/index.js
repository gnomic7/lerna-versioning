"use strict";

module.exports = product;

const product = (...x) => {
  return x.reduce((acc, val) => acc * val);
};
