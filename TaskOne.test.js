const{studentName, studentAge, secondCourse, addresses, addGpa} = require("./TaskOne.js")

test('the student name',()=>{
    let name = "John Doe";
    let result = studentName(name);
    expect(result).toBe(name);

})
test("the student age", () =>{
    let age = 22;
    let result = studentAge(age);
    expect(result).toBe(age);
})
test("the second course", () =>{
    let courses = ["Math","Physics","Computer Science"];
    let result = secondCourse(courses);
    let answer = "Physics";
    expect(result).toBe(answer);
})
test("the zip code", () =>{
    let address = {
        city: "New York",
        zip: 10001,
    }

let result = addresses(address.zip);
let answer = 10001;
expect(result).toBe(answer);
})
test("update age", () =>{
    let age = 23;
    let result = studentAge(age);
    expect(result).toBe(age);
})
test("add GPA", () =>{
    let gpa = 3.8;
    let result = addGpa(gpa);
    expect(result).toBe(gpa);
})
// test("return details",() =>{
//     let nam = studentName();
//     let age = studentAge();
//     let result = "John Doe is 23 years old";
//     let resul = getDetails(`"${nam} is ${age} years old"`)
//     expect(resul).toBe(result);
// })