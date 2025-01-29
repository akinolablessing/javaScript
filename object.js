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
 
}
//for(const namePerson in personName)
console.log(personName.firstName+ "  "+personName.secondName)
console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!")

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
