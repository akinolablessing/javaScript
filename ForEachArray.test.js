const {getDoubleNumbers,getEvenNumbers, getOddNumbers,addThreeToEachElement,addFiveToEachElement,addTwoToEachElement} = require("./ForEachArray");

test("multiply each element by two", () =>{
    let numbers = [2,3,4,5,6,7];
    let result = getDoubleNumbers(numbers);
    let answer = [4,6,8,10,12,14];
    expect(result).toEqual(answer);
})
test("check even numbers",() =>{
    let numbers = [1,2,3,4,5,6,7,8,9,10];
    let result = getEvenNumbers(numbers);
    let answer = [2,4,6,8,10];
    expect(result).toEqual(answer);
})
test("check odd numbers",()=>{
    let numbers = [2,3,4,5,7,8,9,11];
    let result = getOddNumbers(numbers);
    let answer = [3,5,7,9,11];
    expect(result).toEqual(answer);
})
test("Add three to each element", ()=>{
    let numbers = [5,6];
    let result = addThreeToEachElement(numbers)
    let answer = [8,9]
    expect(result).toEqual(answer);
})
test("Add five to each element", ()=>{
    let number = [5,10];
    let result = addFiveToEachElement(number);
    let answer = [10,15];
    expect(result).toEqual(answer);
})
test("Add two to each element",()=>{
    let number = [2,4]; 
    let result = addTwoToEachElement(number);
    let answer = [4,6];
    expect(result).toEqual(answer);
})