"use strict";
console.log("intefaces in ts");
function isValid(user) {
    if (user.age >= 18) {
        console.log("user is leagle");
        return true;
    }
    else {
        console.log("user is not leagle");
        return false;
    }
}
isValid({
    name: "vikash sharma",
    age: 22,
    height: 170
});
