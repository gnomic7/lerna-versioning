"use strict";

module.exports = product;

function product(...x) {
  return x.reduce((acc, val) => acc * val);
}
