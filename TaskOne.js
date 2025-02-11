function studentName(name){
 const result = name;
 return result;
}
function studentAge(age){
const result = age;
return result
}
function secondCourse(courses){
   
        if (courses.length < 2) {
          return null;
        }
        return courses[1];

}
function addresses(address){
   return address;
}
module.exports = {studentName,studentAge, secondCourse, addresses};
