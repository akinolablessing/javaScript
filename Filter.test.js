const {getOddNumbers, getMultipleOfFive , getSquareRoot , getWords,testScores,addFivePointToEachScore,squareEachNumber,addStudent} = require("./Filter");

beforeEach(()=>(
    numbers = [2,3,4,5,6,7]

    // const students = [

    // ]
))

test("return odd numbers",()=>{
  let result = getOddNumbers(numbers);
  let answer = [3,5,7];
  expect(result).toEqual(answer);  
})
test("Multiply the element with Five", () =>{
    let result = getMultipleOfFive(numbers);
    let answer = [10,15,20,25,30,35];
    
})
test("square the element",()=>{
    let result = getSquareRoot(numbers);
    let answer = [4,9,16,25,36,49];
})
test("return words with length greater than four",()=>{

    let word = ["hi","joseph","ayomide","java","egg"];
    let result = getWords(word);
    let answer = ["hi","joseph","ayomide"];
})
test("the student scores",()=>{
    let score = [23,66,20,90,50,79,50,100,105];
    let result = testScores(score);
    let answer = [90,79,100,105];
    expect(result).toEqual(answer);  
})
test("add five point to each scoore",()=>{
    let score = [85,92,78,88,95];
    let result = addFivePointToEachScore(score);
    let answer = [90,97,83,93,100];
    expect(result).toEqual(answer);  
})
test("square the element",()=>{
    let numbers = [2,4,6,8,10]
    let result = squareEachNumber(numbers);
    let answer = [4,16,36,64,100];
    expect(result).toEqual(answer);
})
test("add Student scores", ()=>{
    const student =[
        {name:"ayo",age:25},
        {name:"estee",age:2},
    ]
    let result = addStudent(student);
    let answer = [{name:"ayo",age:25}];
    expect(result).toEqual(answer);
})
