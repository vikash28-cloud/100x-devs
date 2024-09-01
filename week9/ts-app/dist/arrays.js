"use strict";
let a = [10, 20, 30, 40];
console.log(a);
let names = ["Alice", "Bob", "Charlie"];
console.log(names);
function maxValue(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
let ans = maxValue([10, 20, 30, 40]);
console.log(ans);
function filterUsers(users) {
    console.log(users.length);
}
let u1 = {
    firstname: "vikash",
    lastname: "sharma",
    age: 18
};
let u2 = {
    firstname: "vikash",
    lastname: "sharma",
    age: 18
};
let u3 = {
    firstname: "vikash",
    lastname: "sharma",
    age: 18
};
filterUsers([u1, u2, u3]);
