import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


async function insertUser(username:string,password:string,firstname:string,lastname:string) {
    const res = await prisma.users.create({
        data:{
            username,
            password,
            firstname,
            lastname
        }
    })

    console.log(res);
}

// insertUser("vikash.sharma_mca24@gla.ac.in","vikash.12","vikash","sharma");

async function getUser(fname: string) {
    const user = await prisma.users.findFirst({
        select:{
           
            username:true
        },
      where: {
          firstname: fname
      }
    })
    console.log(user);
  }
  
  getUser("vikash");