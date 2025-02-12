
const isOdd = (number)=>{
  let answer = number % 2 != 0;
  return answer;
}
const isMultipleOfFive = (number) =>{
    let answer = number * 5;
    return answer;
}
const isSquare = (number)=>{
 let answer = Math.sqrt(number);
}
const getWords=(array)=>{
   return array.filter((word)=>word.length > 4 )
}
const getStudent = (array)=>{
    let answer = array >= 70;
   return answer;
}
function getOddNumbers(array){
  let answer = array.filter(isOdd);
    return answer;
}
function getMultipleOfFive(num){
    return num.filter(isMultipleOfFive);
}
function getSquareRoot(element){
 return element.filter(isSquare);
}
function testScores(score){
 return score.filter(getStudent);
}
function addFivePointToEachScore(arr){
    let result = arr.map((number) =>(number + 5));
    return result;
  }
  function squareEachNumber(num){
   let result = num.map((number) =>(number * number))
   return result;
  }
  function addStudent(student){
    return student.filter((student) => student.age > 20)
  }

module.exports ={getOddNumbers , getMultipleOfFive, getSquareRoot , getWords , testScores,addFivePointToEachScore,squareEachNumber,addStudent};