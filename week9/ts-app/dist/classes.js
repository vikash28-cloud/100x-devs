"use strict";
// class Point {
//   x = 10;
//   y = 20;
class Employee {
    constructor(name, age) {
        this.name = name,
            this.age = age;
    }
    greet(phrase) {
        console.log("hey " + this.name + phrase + this.age);
    }
}
const ob1 = new Employee("vikash", 22);
ob1.greet(" your age is ");
