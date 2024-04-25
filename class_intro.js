
class Animal {

    constructor(name, legCount,a) {
      this.name = name
      this.legCount = legCount
      this.a = 1;
    }
    printA(){
      console.log(this.a);
    }
    
    static a=10; // this is a static varible it is associated to class 
    increment(){
        Animal.a++;
    }
    speaks(){
        console.log(this.name+this.legCount);
    }
    describe() {
      return `${this.name} has ${this.legCount} legs`
    }
  }

let ob1 = new Animal("Dog",4);
  ob1.speaks();
  ob1.increment();
  ob1.a++; ob1.printA();
  
  let ob2 = new Animal();
  ob2.printA();
  
  console.log("static varible : "+Animal.a);