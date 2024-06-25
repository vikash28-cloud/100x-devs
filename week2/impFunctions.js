// filter
// map
// arrow functions

const { copyFileSync } = require("fs");


// map---------------//
// let arr = [10,20,30,40];   //[100,200,300,400] *10

// function double(item){
// for(let i=0;i<arr.length;i++){
//     arr[i] = arr[i]*10;
// }
// }

// arr.map((element,i)=>{
//         console.log(i,"  ",element*10)
// });

// const newArr = arr.map((element,index)=>{
//     return element*10;
// })

// console.log(newArr);



// filter

let arr = [1,2,3,4,5,,6,7,8];
// i want to filter out even numbers from given array



// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         newArr.push(arr[i]);
//     }
// }

let newArr = arr.filter((item)=>{
    if(item%2==0){

        return true;
    }
})

console.log(newArr)



