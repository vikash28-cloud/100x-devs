function jsonMethods(jsonString){
    // console.log("Original JSON String:", jsonString);
    
    // parse string to js object

    let parseObj = JSON.parse(jsonString);
    console.log("after parse ",parseObj);
    console.log(parseObj.nested)
    
    // stringyfy js object to json string
    let jsonStringyfy =JSON.stringify(jsonString);
    console.log("after json stringyfy :",jsonStringyfy)
    let x = [1,2,3,4]
    let newx = JSON.stringify(x);
    console.log(x);
    console.log(typeof(x))
    console.log(typeof(newx))

    const date = new Date();
    console.log(JSON.stringify(date))

}


const example =  '{"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}'
jsonMethods(example);
