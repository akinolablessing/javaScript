
const {multiply , addTwoNumbers,subtractTwoNumbers,getOddNumbers} = require("./index.js")

let numberOne = 6;
let numberTwo = 2;   // Arrange


test('multiply two numbers',()=>{
  let numberOne = 2;
  let numberTwo = 6; // Arrange
  let result = multiply(numberOne , numberTwo); // Act
  let answer = 12;
  expect(result).toBe(answer); //Assert

})
test("add two numbers", () =>{
 let sum = addTwoNumbers(numberOne, numberTwo);
  let answer = 8;
   expect(sum).toBe(answer);
});

test("subtract two numbers", () =>{
  let sub = subtractTwoNumbers(numberOne, numberTwo);
  let ans = 4;
   expect(sub).toBe(ans);
}) 

test("return odd numbers", ()=>{
 let arrayOfNumbers = [1,2,3,4,5,6];
 let result = getOddNumbers(arrayOfNumbers);
 let ans = [1,3,5];
 expect(result).toEqual(ans);
})