const sampleObj = {
    key1:"value 1",
    key2:"value 2",
    key3:"value 3",
}
objectMethods(sampleObj);

function objectMethods(sampleObj){
    // prints all the key vlaue pairs 
    console.log(sampleObj)

    // prints keys only
    console.log(Object.keys(sampleObj));

    // prints values only
    console.log(Object.values(sampleObj))

    // prints entries - it creates the array of the object in which every key value pair is another array
    console.log("array = ",Object.entries(sampleObj))
    let entries = Object.entries(sampleObj)
    console.log("fisrt element of array",entries[0])

    // hasOwnPropert("property") = boolean vlaue 
    // if object have property then it return true else false
    let Obj = {
        name:"vikash",
        email:"expertvikash@gmail.com"
    }
    console.log(Obj.hasOwnProperty("password"))
    console.log(Obj.hasOwnProperty("name"))

    // assign new key value to the object
    let newObj =Object.assign({} , sampleObj , {newPropert:"newValue"});
    console.log(newObj);
    

}