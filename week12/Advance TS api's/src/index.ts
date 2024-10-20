interface User {
  name: string;
  age: number;
}

function sumOfAge(user1: User, user2: User): number {
  return user1.age + user2.age;
}

// Example usage
const result = sumOfAge(
  {
    name: "harkirat",
    age: 20,
  },
  {
    name: "raman",
    age: 21,
  }
);
console.log(result);



// generics 
function echo<T>(input: T): void{
  console.log(input);
}

echo<string>("hello generics");
echo<number>(103);


// pick

interface students{
  id:number;
  name: string;
  age: number;
  email: string;
}

let student1=
{
  id:1001,
  name:"vikash sharma",
  age:22,
  email:"vikash@gmail.com"
}

type updateprop = Pick<students,'age'|'name'|'email'>


function getStudent(student:updateprop){
  console.log(student.age,student.email);
}
getStudent(student1);


// partial

type newProps = Pick<students,'age'|'name'|'email'>
type updateNewProp = Partial<newProps>
function parialfunction(prop1:newProps){ //if we use newProps instead of updateNewProps it will give error because you have pass only two things name and email and it requires age also along with them ,but if you use updateNewProp it use partial so you are comfortable by pass two values 
  console.log(prop1)
}

// change newProps in function to updateNewProps
// parialfunction({name:"vikash",email:"vrnriero"}); 





// Readonly

const ans = {
  name: "vikash",
  age: 22,
  email: "vikash@gmail.com",
  address: "delhi"
}
ans.email = "new";
console.log(ans);
// we create const type object but we still change the values of its properties

// so we use readonly to prevent this
interface  example1 {
  name:string
  readonly age:number
  email:string
}

const user :example1 = {name:"vikash",age:22,email:"viaksh@gmail.com"};

// user.age = 23; // this will give error because we have used readonly   
// user.age = 23;



// application example
interface Config{
  endpoint:string
  apiKey:string
}

const config:Readonly<Config> = {
  endpoint: "https://api.example.com",
  apiKey: "123456789fejf0"
}

// this will give error because we have used readonly
// config.apiKey = "11213121"
// config.endpoint = "http://newapi.acom";




// Records
type UserAge = {[key:string]:number};

const userage1:UserAge={
  "vikash":22,
  "vikash1":23
}
// using record
type userAgeRecord =Record<string,number>; //more cleaner syntax than above

const userage2:userAgeRecord={
  "vikash":22,
  "vikash1":23
};

