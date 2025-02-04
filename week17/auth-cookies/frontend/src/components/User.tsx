import axios from "axios"
import { useEffect, useState } from "react"
import { Logout } from "./Logout";

export const User=()=>{
    const [data,setData] = useState();
    useEffect(()=>{
        async function main(){
            const res  =await axios.get("http://localhost:8000/users",{withCredentials:true})

            console.log(res.data);
            setData(res.data);
        }
        main()
    },[])
    return (
        <div>
            users page
            <Logout/>
            
        </div>
    )
}