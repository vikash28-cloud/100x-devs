import React from "react";
import { useState } from "react";

const Assignment1 = () => {
    const [color ,setColor] = useState("white")
    const colors = ["red", "black", "green", "blue"];
    return (
        <>
        <div>
            <h1>Color Changer</h1>
        </div>
            <div
                style={{
                    border: "2px solid black", width: "80vw", height: "60vh",
                    margin: "auto",
                    backgroundColor: color

                }}
                className="container"
            >
                Assignment1
            </div>
<hr />
            <div className="colorContainer" style={{
                display:"flex",
                justifyContent:"center",
                gap:"20px"

            }}>

                {
                    colors.map((color,index)=>(
                        <Buttons key={index} color={color} setColor={setColor}/>
                    ))

                }
                
            </div>

        </>

    );
};

function Buttons({color,setColor}){
    return(
        <>
        <button onClick={()=>setColor(color)}>{color}</button>
        
        </>
    )
}



export default Assignment1;

// bg changer
