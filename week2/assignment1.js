// remove all extra spaces from a file
// after removing all extra spaces write it back to the same file


const fs  = require("fs");

const data = "hello      this     is  vikash    sharma"

let w = fs.writeFile("assignment.txt",data,()=>{
    console.log("file writing done")
});

let r = fs.readFile("assignment.txt","utf-8",(err,data)=>{
    if(err){
        console.log("error = ",err)
    }
    console.log("file reading done");
    removeSpace(data);
})


function removeSpace(data){

    console.log(data);

    // logic of removing extra spaces from data
    let newData = data.split(' ').filter(word => word !== '').join(' ');
    console.log(newData)

    fs.writeFile("assignment.txt",newData,(err)=>{
        if(err){
            console.log("error")
        }
        console.log("extra space removed");
    })
}

