console.log("intefaces in ts")

interface User{
    name:string,
    age:number,
    height:number,
    
}


function isValid(user:User){
    if(user.age>=18){
        console.log("user is leagle");
        return true;
    }
    else
    {
        console.log("user is not leagle");
        return false
    }
}


isValid({
    name: "vikash sharma",
    age: 22,
    height: 170,
})