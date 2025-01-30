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

var prompt = require('prompt-sync')();
let number = prompt("Enter a number: ")

function sumOfDigits(number) {
    let sum = 0;
    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    return sum;
}
console.log(sumOfDigits(number));

console.log("Qujestion 3");


var prompt = require('prompt-sync')();
let reverse = prompt("Enter a number: ")

function getreverseNumber(reverse){
  let reverseNumber = 0;
  while(reverse > 0){
   reverseNumber = reverseNumber * 10 + reverse % 10
    reverse = Math.floor(reverse /10);
 }
return reverseNumber
}
console.log(getreverseNumber(reverse));

console.log("Qujestion 4");
var prompt = require('prompt-sync')();
let secondReverse = prompt("Enter a number: ")

function getSecondReverse(secondReverse){
let reverseNum = 0;
	while(secondReverse > 0){
	reverseNum = reverseNum * 10 + secondReverse % 10
	secondReverse = Math.floor(secondReverse / 10);
}
return reverseNum
}
console.log(getSecondReverse(secondReverse));
console.log("Qujestion 5");
var prompt = require('prompt-sync')();
let firstNumber = prompt("Enter first number: ")
let secondNumber = prompt("Enter second number: ")
let thirdNumber = prompt("Enter third number: ")

function getReverseThreeNum(firstNumber,secondNumber,thirdNumber){
if (firstNumber > secondNumber && firstNumber > thirdNumber )
if(secondNumber > firstNumber && secondNumber > thirdNumber)
if(thirdNumber > firstNumber && thirdNumber > secondNumber)
 console.log(getReverseThreeNum(firstNumber,secondNumber,thirdNumber))

}

console.log("Question 6");
var prompt = require('prompt-sync')();
let patterNumber = prompt("Enter a number: ")

function displayPattern(patterNumber) {
    let pattern = '';
    for (let i = 1; i <= patterNumber; i++) {
        for (let j = 1; j <= i; j++) {
            pattern += ' ' + j ;
        }
               pattern += '\n';
    }
    console.log(pattern);
}

displayPattern(patterNumber);

console.log("Qujestion 7");
var prompt = require('prompt-sync')();
let celsius = prompt("Enter a number for celsius: ")
let fahrenheit = prompt("Enter a number for fahrenheit")

