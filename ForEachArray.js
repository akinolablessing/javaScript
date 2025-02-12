
function getDoubleNumbers(arrayOfNumbers){
    let doubledNumbers = [];
  arrayOfNumbers.forEach((element) =>{
    let result = element * 2;
    doubledNumbers.push(result);

  })
   return doubledNumbers;
}
const getEvenNumbers = (arrayOfNumbers) =>{
  let evenNumbers = [];
  arrayOfNumbers.forEach((element) =>{
    if(element % 2 == 0){
      evenNumbers.push(element);
    }
  })
  return evenNumbers;
}
const getOddNumbers = (arrayOfNumbers) =>{
  let oddNumbers = [];
  arrayOfNumbers.forEach((element)=>{
    if(element % 2 == 1){
     oddNumbers.push(element);
    }
  })
  return oddNumbers;
}
function addThreeToEachElement(arr){
  let result = arr.map((number) =>(number + 3));
  return result;
}
function addFiveToEachElement(arr){
    let result = arr.map((number) =>(number + 5));
    return result;
}
function addTwoToEachElement(num){
    let result = num.map((number)=>(number + 2))
    return result;
}
module.exports = {getDoubleNumbers,getEvenNumbers,getOddNumbers,addThreeToEachElement,addFiveToEachElement,addTwoToEachElement};