'use strict';

var fibSeries = [1, 2];

var fibOne = 1;
var fibTwo = 2;

var fibTemp = fibOne + fibTwo;
fibOne = fibTwo;
fibTwo = fibTemp;

while (fibTwo <= 4000000) {
    fibSeries.push(fibTwo);
    fibTemp = fibOne + fibTwo;
    fibOne = fibTwo;
    fibTwo = fibTemp;
}

var sum = 0;

fibSeries.map((fib) => {
    if (fib % 2 === 0) {
        sum += fib;
    }
})

console.log(sum);