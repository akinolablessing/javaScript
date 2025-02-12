const {incrementLastElement,secondIncrementLastElement} = require("./TaskTwo");
test("add to the element",()=>{
    let number = [3,4,2];
    let result = incrementLastElement(number);
    let answer = [3,4,3];
    expect(result).toEqual(answer);
})
test("add to the last element",() =>{
    let number = [9,9,9];
    let result = secondIncrementLastElement(number);
    let answer = [1,0,0,0];
    expect(result).toEqual(answer);
})