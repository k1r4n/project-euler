'use strict';

var result = 999999;

while(result >= 10001) {
    var resultRev = parseInt(result.toString().split('').reverse().join(''), 10);
    var flag = false;
    if (result === resultRev) {
        var num = 999;
        while (num >= 100) {
            if (result %  num == 0) {
                if (((result / num) >= 100) && ((result / num) < 1000)) {
                    flag = true;
                    break;
                }
            }
            num--;
        }
    }
    if (flag) {
        break;
    }
    result--;
}

console.log(result);