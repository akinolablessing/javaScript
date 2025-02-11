function add_number(firstNumber,secondNumber){
    return firstNumber + secondNumber

}
function subtract_number(firstNumber,secondNumber){
   return firstNumber - secondNumber
}
function multiply_number(firstNumber,secondNumber){
    return firstNumber * secondNumber  
}
function isEven(number){
    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(add_number(5,5));
console.log(subtract_number(10,5));
console.log(multiply_number(5,5));
console.log(isEven(55));
console.log(isEven(22));
console.log(isEven(44));
console.log(isEven(0));