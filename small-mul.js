'use strict';
var min = 1;
var max = 20;
var array = []
for(var i = min; i <= max; i++) {
    array.push(i);
}

function gcd(a, b) {
    return !b ? a : gcd(b, a % b);
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);   
}

var multiple = min;
array.forEach(function(n) {
    multiple = lcm(multiple, n);
});
console.log(multiple);