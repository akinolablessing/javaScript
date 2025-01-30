console.log("Qujestion 1");
function getpentagonalNumber(n) {
    return (n * ((3 * n) - 1)) / 2;
}

console.log(getpentagonalNumber(1));  
console.log(getpentagonalNumber(5));  
console.log(getpentagonalNumber(12));  
console.log(getpentagonalNumber(22));  

// n ( 3 n − 1 ) 2//
//Math.floor//


console.log("Qujestion 2");

function sumOfDigits(n) {
    let sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return sum;
}
console.log(sumOfDigits(234));

console.log("Qujestion 3");

//var prompt = require('Enter a number:')();//
