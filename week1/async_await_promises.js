const fs = require("node:fs");


console.log("program start")

//---------------------------------------js asynchronous nature ----------------------------//

// setTimeout(()=>{
//     fs.writeFile("./week1/sample2.txt","vikash sharma",'utf-8',(err)=>{
//         if(err){
//             console.log("err occurs")
//         }
//         console.log("file written successfully");
//     })
// },2000)




// function fun1( cfun) {
//     fs.readFile("./week1/sample2.txt",'utf-8',(err,data)=>{
//         if(err){
//             console.log("error",err);
//         }
//         cfun(data);
//     })
// }

// function cfun(data){
//     console.log(data);
// }

// fun1(cfun);



// -------------------------------------promises in js--------------------------------//

// function vikashFile() {
//     return new Promise(function (resolve) {
//         console.log("inside Promise")
//         fs.readFile("./week1/sample2.txt", 'utf-8', (err, data) => {
//             if (err) {
//                 console.log("error", err);
//             }
//             resolve(data);
//         })

//     })
// }

// function fun1(data) {
//     console.log(data)
// }

// var a = vikashFile();
// console.log(a);
// a.then(fun1)

// setTimeout(() => {
//     console.log(a);
// }, 5000)


// let d = new Promise(function (resolve) {
//     console.log("inside promise")
//     setTimeout(() => {
//         resolve("promise is resolved");
//     }, 3000)
// }).then((d)=>{
//     console.log(d);
// })

// console.log(d);


// use of promise
// function hello(){
//     let p = new Promise(function(resolve){
//         setTimeout(resolve, 2000);
//     });
//     return p;
// }

// let value = hello();
// console.log(value);
// value.then(function(){
//     console.log("hi there")
// })


// // without promise
// function simpleFunction(callback){
//     // processing taking time
//     setTimeout(callback, 3000);

// }
// simpleFunction(function(){
//     console.log("this is a call back function")
// })


// promises improves code readability

// ------------------------------async await------------------------//

function normalfunction() {
    let p = new Promise((resolve) => {
        resolve("hello this promise is resolved inside normal function")
    })
    return p;
}

function main() {
    let value = normalfunction();
    value.then((data) => {
        console.log(data)
    })
}
main();

// but i want to get rid from .then , callbacks, nesting

function asyncfunction() {

    let p = new Promise((resolve) => {
        setTimeout(() => {
            resolve("promise is resolved inside async function")
        }, 3000)
    })
    return p;
}

async function main2() {
    const data = await asyncfunction();
    console.log(data);
}
main2();


console.log("program end")

