import axios from "axios";
import { useEffect, useState } from "react"

export interface userType{
    name:string;
    email:string;
    id:string;
    age:number;
}

export const useUser=()=>{
    const [ user, setUser ] = useState<userType>();
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        async function main(){
          const res = await axios.get("https://my-app.expertvikash.workers.dev/user");
          console.log(res.data);
          setUser(res.data);
          setLoading(false);
        }
    
        main()
      }, []);
      return {
        loading,
        user,
      }

}