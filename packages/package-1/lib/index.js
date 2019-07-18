"use strict";

module.exports = { sum, minus };

const sum = (...x) => {
  return x.reduce((acc, val) => acc + val);
};

const minus = (x, y) => x - y;
