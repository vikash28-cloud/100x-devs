type Input = number|string;

function firstEl(arr:Input[]){
    return arr[0];
}

const value = firstEl(["vikash","abc"]);
// console.log(value.toUpperCase()); 
// problem 1
// Property 'toUpperCase' does not exist on type 'number'.

let result = firstEl([1,2,3,"vikash"]);   //this can be done in ts
console.log(result);
// problem 2
// User can send different types of values in inputs, without any type errors

// for both problems is generics

// arguments can be any type
function function1<T>(args:T){
    return args;
}

console.log(function1("vikash"))
console.log(function1(100));




function firstElement<T>(args:T[]){
    return args[0];
}

console.log(firstElement<string>(["vikash","efek",1]).toUpperCase());
// now if we pass different type values it will give error like 1 

console.log(firstElement(["vikash","efek"]).toUpperCase());
// now typescript able to infer the right types of the return types
console.log(firstElement([10,20,30]));






