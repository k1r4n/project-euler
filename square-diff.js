'use strict';

var sumSqr = (100 * (100 + 1) * (2 * 100 + 1)) / 6;
var sqrSum = Math.pow(((100 * (100 + 1)) / 2), 2);
var result = sumSqr - sqrSum;
console.log(result);