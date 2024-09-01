type student = {
    name:string,
    age:number|string
}

let user1:student = {
    name:"vikash",
    age:18

}
let user2:student={
    name:"vikash",
    age:"18"
}

console.log(user1);
console.log(user2);

type person1={
    name:string 
}

type person2={
    age:number
}

type person3 =person1 & person2;

const user3:person3={
    name:"vikash",
    age:18
}

console.log(user3)

