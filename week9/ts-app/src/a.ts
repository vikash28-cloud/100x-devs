
// typescript add type safty to js code

// let x: string = "vikash";
let x: { value: string } = { value: "vikash" };
// console.log(x);

// we have to tell the type of an parameter
const greet=(x: { value: string },fname:string,age:number)=>{
    console.log("hello "+fname)
    x.value="changed"
}

greet(x,"vikash",22);
setTimeout(() => {
    console.log(x);
    
}, 3000);

function sum(a:number,b:number){
    return a+b;
}

console.log(sum(10,20));


function isLeagle(age:number):boolean{
    if(age>=18){
        return true;
    }
    else{
        return false;
    }
}
let age = isLeagle(18);

console.log(age);


// how to give a type of a function

function fun1(fn:()=>void){
    setTimeout(fn,1000);
}

fun1(function(){
    console.log("function which is passed as an argument")
})