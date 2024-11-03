import { PrismaClient } from "@prisma/client";
import { connected } from "process";
const prisma  = new PrismaClient();

async function createUser(username:string,email:string,password:string,firstname:string,lastname:string){
   const res = await prisma.user.create({
        data:{
            username,
            email,
            password,
            firstname,
            lastname

        }
    })
    console.log(res);
}

async function CreateTodo(title:string,desc:string) {
    const res = await prisma.todo.create({
        data:{
            title,
            description:desc,
            userId:1,     //if user is not present it gives error
            done:false
        }
    })
    console.log(res);
}

async function getTodos(){
    const res = await prisma.todo.findMany({
       where:{
        userId:1
       },
       select:{
            id:true,
            done:true,
            title:true,
            user:true
       }

    })
    console.log(res);
}


// change parameters
// createUser("ssvikash2896","visskash@gmail.com","2xsseye8","vssikash","sssharma");
CreateTodo("test1","jioej roe er oie ropei roe");
// getTodos();