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



// -------------------------------------  promises in js--------------------------------//






console.log("program end")

