"use strict";
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
// Example usage
const result = sumOfAge({
    name: "harkirat",
    age: 20,
}, {
    name: "raman",
    age: 21,
});
console.log(result);
// generics 
function echo(input) {
    console.log(input);
}
echo("hello generics");
echo(103);
let student1 = {
    id: 1001,
    name: "vikash sharma",
    age: 22,
    email: "vikash@gmail.com"
};
function getStudent(student) {
    console.log(student.age, student.email);
}
getStudent(student1);
