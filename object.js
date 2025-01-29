let user = {
name:"Ayomide",
age:21,
sex: "female",
complexion:"light in complextion",
sateOfOrigin:"Osun State",
country:"Nigeria"
};

console.log(user)
console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
let personName = {
  firstName: "Akinyemi",
  secondName: "Blessing",
  age : 25,
}
function person(personName){
	console.log(personName)
}
(person(personName))
console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!")


console.log(personName.firstName+ "  "+personName.secondName)
console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!")

const book = {title: "The Great Gatsby",author:"F.Scott Fitzgerald",yearPublished:1925}
console.log(book["title"]+" "+" by"+" "+book["author"])
console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
function createObject() {
    let object = {
        "make": "Toyota",
        "model": "Camry",
        "year": 2021
    };

object.brand = "Dell"
object.price = 1200
object.brand = "Apple"
object.price = 999
for(const name in object)
console.log(name+ " "+object[name]);
console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!");
 return object;

}
 return createObject();
