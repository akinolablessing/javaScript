function createObject() {
    let object = {
        "make": "Toyota",
        "model": "Camry",
        "year": 2021
    };

// object.brand = "Dell"
// object.price = 1200
// object.brand = "Apple"
// object.price = 999
 for(const name in object)
 console.log(name+ " "+object[name]);
// console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!");
  return object;

}
 return createObject();
