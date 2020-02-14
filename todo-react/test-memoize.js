const memoize = require('memoize-one');

function sum(a, b) {
    console.log('appel sum');
    return a + b;
}

console.log(sum(1, 2));

const sumMemo = memoize(sum);

console.log(sumMemo(1, 2));
console.log(sumMemo(1, 2));
console.log(sumMemo(1, 2));
console.log(sumMemo(1, 2));