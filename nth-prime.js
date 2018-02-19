'use strict';

function isPrime(x) {
    var isPrime= true;
    for (var d = 2; d <= Math.sqrt(x); d++) {
        if((x/d) % 1 == 0) {
            isPrime = false;
            break;
        }
    }
    return isPrime;
}

var count = 0;
var i;
for (i = 2; ; i++) {
    if (isPrime(i)) {
        count++;
    }
    if (count === 10001) {
        break;
    }
}

console.log(i);