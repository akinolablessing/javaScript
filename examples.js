let user = {
 firstName: "Äyomide",
 secondName: "Blessing",
 age: 12,
 greet: function(){
        return("hello")
 }

};
user.sex= "Female"
user.height= "Tall";
let values = Object.values(user);
let entries = Object.entries(user);
console.log(values)
console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
console.log(entries)
console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
let number = 10
for(let index = 1; index <= number; index++){
  console.log(index);
};
console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

let numb = [1,2,3,4,5];
for(const number of numb){
  console.log(number)
}

console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

const num = [1,2,3,4]
const userProfile = {
   name : "Gloria",
   age : 23
}
for(let coun in userProfile){
  console.log(coun + " "+ userProfile[coun])
  console.log(" ")
}
console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

for(let count in num){
  console.log(count + " "+ num[count])
  console.log(" ")
}
`
console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

let figure = [1,2,3,4,5];
let inde = 0;
do{
  console.log(figure[inde]);
  inde++;

 }while(inde < 4);