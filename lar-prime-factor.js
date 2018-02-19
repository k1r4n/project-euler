'use strict';

var larPrimeFactor;
var num = 600851475143;

for (var i = 2; i <= num/2; i++) {
    if (num % i === 0) {
        var flag = false;
        for (var j = 2; j <= i/2; j++) {
            if (i % j === 0) {
                flag = true;
            }
        }
        if (!flag) {
            larPrimeFactor = i;
        }
    }
}

console.log(larPrimeFactor, 'final result');