import Button from "../../../components/Button";

export default function({children}:{children:React.ReactNode}){
    
    return <div>
        {children}
        <div className="absolute top-7 right-4  w-[100px] h-5 ">
            <a href="/"><Button name="Go to Home"/></a>
            
    </div>
    </div>
}