"use strict";

module.exports = sum;

function sum(...x) {
  return x.reduce((acc, val) => acc + val);
}
