import Link from "next/link";
import Button from "../../../components/Button";

export default function AuthLaout ({children}:{children:React.ReactNode}){
    
    return <div>
        {children}
        <div className="absolute top-7 right-4  w-[100px] h-5 ">
            <Link href="/"><Button name="Go to Home"/></Link>
            
    </div>
    </div>
}