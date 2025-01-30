//function Declaration
console.log(getName());
function getName(){

return "Ayomide"
}
console.log(getName());

//function Expression

const greet = function(){
return "morning"
}
console.log(greet())

/*Nested Function*/

function assertEquals(){
  function getMen(){
   let numberOfMen = "23";
   return numberOfMen
 };
  function getLadies(){
   let numberOfLadies = 23
     return numberOfLadies
 };
/*return getMen() === getLadies()*/
return getMen() == getLadies()
};
console.log(assertEquals());

/*Arrow function*/
function assert(){
const getBoys =() =>{
/* I can put everything in nested function inside it*/
 }
}

function count(){
 let value = 5;
return{
 increment: function(){
   return value++
},
decrement: ()=>{
 return value--
},
 getValue: function(){
  return value
}
}
};
let counter = count()
counter.increment();
console.log(counter.getValue());

let firstnam = "fish"
function gree(name){
return `Hello ${name}`
};
function executeFunction(callBack, userName){
  return callBack(userName)
}
let result = executeFunction(gree, firstnam)
console.log(result)
