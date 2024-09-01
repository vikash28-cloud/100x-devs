let a: number[] =[10,20,30,40];
console.log(a)


let names: string[] = ["Alice", "Bob", "Charlie"]
    console.log(names);


    type numberArray = number[];

    function maxValue(arr:numberArray){
        let max=0;

        for(let i=0;i<arr.length;i++){
            if(arr[i]>max){
                max = arr[i];
            }
        }
        return max;

    }

    let ans = maxValue([10,20,30,40]);
    console.log(ans);



    interface Users{
        firstname:string,
        lastname:string,
        age:number
    }

    function filterUsers(users:Users[]){
        console.log(users.length)
    }

    let u1:Users={
        firstname:"vikash",
        lastname:"sharma",
        age:18
    }
    let u2:Users={
        firstname:"vikash",
        lastname:"sharma",
        age:18
    }
    let u3:Users={
        firstname:"vikash",
        lastname:"sharma",
        age:18
    }

    filterUsers([u1,u2,u3])