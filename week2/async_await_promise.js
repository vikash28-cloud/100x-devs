// revision
// async, promise , callbacks

//------------------------ callbacks--------------------------------/
// function square(n){
//     return n*n;
// }

// function cube(n){
//     return n*n*n;
// }

// function sumOfanything(a,b,callback){
//     let obj1 = callback(a);
//     let obj2 = callback(b);
//     return obj1+obj2;
// }


// let ans = sumOfanything(1,2,square);
// console.log(ans);

//---------------------------- async----------------------------------/
// const fs = require("fs");
// function onDone(content){
//     console.log(content)
// }

// // fs.writeFile("sample.txt","vikash sharma",(err)=>{
// //     if(err){
// //         console.log(err);
// //     }
// //     else
// //     {
// //         console.log("writing file done")

// //     }
// // })

// fs.readFile("sample.txt",'utf-8',(err,data)=>{
//     setTimeout(()=>{
//         onDone(data);
//     },3000)
    
// });

// console.log("end");

// -------------------------promises----------------------/

console.log("hello world")
// mySetTimeout(()=>{
//     console.log("my timeout function")
// },2000)
console.log("bye world")


setTimeout(()=>{
    setTimeout(()=>{
        console.log("inside")
    },3000)
    ab();
},1000)

function ab(){
    console.log("outside")
}

