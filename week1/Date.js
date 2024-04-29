console.log("Date class ")
const currentDate = new Date();

console.log(currentDate + "")

console.log(currentDate.getMonth() + 1); //0 based index 
// console.log(currentDate.getYear()); it gives year-1900
console.log(currentDate.getFullYear())
console.log(currentDate.getDate())

let weeks = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]


console.log(weeks[currentDate.getDay() - 1]) //gives 4 means thursday
console.log(currentDate.getMinutes())
console.log("Hours:", currentDate.getHours());
console.log("Minutes:", currentDate.getMinutes());
console.log("Seconds:", currentDate.getSeconds());

currentDate.setFullYear(2022);
console.log("set full year: ", currentDate.getFullYear())

currentDate.setMonth(5); // Setting month to June (zero-indexed)
console.log("After setMonth:", currentDate);

console.log("Time in milliseconds since 1970:", currentDate.getTime());

const newDate = new Date(2023, 8, 15); // Creating a new date
  console.log("New Date:", newDate)