const{studentName, studentAge, secondCourse, addresses} = require("./TaskOne.js")

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
