let fruits = ["Orange","Banana","Pawpaw","Mango"];
fruits[1] = "Lemon";
fruits.push("garbage");
fruits.unshift("cashew");
let index = fruits.indexOf("Orange");
let numOfFruits = fruits.length;
//fruits.shift();
//fruits.pop();
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
console.log(`${numOfFruits} is the length of the array`);
console.log(`${index} is index of Orange`);