
'use client';
import { useRouter, useSearchParams } from "next/navigation";

export default function UserComponent (){
  
    const searchParams = useSearchParams();
    const user = searchParams.get('user');
    console.log(user);
    return(
        <div className="bg-white text-black">
            <h1>hello world from user component</h1>
            <h1>{user}</h1>
        </div>
    )
}