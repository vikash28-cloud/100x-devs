// class Point {
//   x = 10;
//   y = 20;

//   constructor() {
//     console.log(this.x);
//     console.log(this.y);
//   } 
// }

// const pt = new Point();


interface Person{
  name:string,
  age:number,
  greet(phrase:string):void
}

class Employee implements Person{
  
  name: string
  age: number;
  constructor(name:string,age:number){
    this.name = name,
    this.age = age
  }

  greet(phrase: string){
    console.log("hey "+this.name+phrase+this.age);
  }
  
}
const ob1 = new Employee("vikash",22);
ob1.greet(" your age is ");
