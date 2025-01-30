console.log("Qujestion 7");
var prompt = require('prompt-sync')();
let celsius = prompt("Enter a number for celsius: ")
let fahrenheit = prompt("Enter a number for fahrenheit: ")

function getToConvert(celsius,fahrenheit){
	let convertCelcius = (5/9)*(fahrenheit - 32)
        let convertfahrenheit = (9/5)* celsius + 32
        return convertCelcius
        return convertfahrenheit
}
console.log(getToConvert(celsius,fahrenheit))
