console.log("Date class ")
const currentDate = new Date();

console.log(currentDate+"")

console.log(currentDate.getMonth()+1); //0 based index 
// console.log(currentDate.getYear()); it gives year-1900
console.log(currentDate.getFullYear())
console.log(currentDate.getDate())

let weeks = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]


console.log(weeks[currentDate.getDay()-1]) //gives 4 means thursday


