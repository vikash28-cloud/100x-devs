import React, {  useEffect, useState } from 'react'

const Inputs = () => {
    const [name,setName] = useState("");
    const [descr,setDescr]=useState("");
    const [link1,setLink1]=useState("");
    const [link2,setLink2]=useState("");
    const [link3,setLink3]=useState("");
    const [intrest,setIntrest]=useState("");
    useEffect(() => {
      
    
      return () => {
        second
      }
    }, [])
    
  return <div>
    <input type="text" placeholder='name'onChange={(e)=>{
        const value = e.target.value
        setName(value)
    }} />
    <input type="text" placeholder='descr' onChange={(e)=>{
        const value = e.target.value
        setDescr(value)

    }} />
    <input type="text" placeholder='btn-github' onChange={(e)=>{
        const value = e.target.value
        setLink1(value)

    }} />
    <input type="text" placeholder='btn-linkedIN' onChange={(e)=>{
        const value = e.target.value
       setLink2(value)

    }} />
    <input type="text" placeholder='btn-twitter' onChange={(e)=>{
        const value = e.target.value
       setLink3(value)

    }} />
    <input type="text" placeholder='intrests' onChange={(e)=>{
        const value = e.target.value
        setIntrest(value)

    }} />
    <button onClick={()=>{
       fetch("http://localhost:3000/create",{
        method:"POST",
        body:JSON.stringify({
            name:name,
            descr:descr,
            link1:link1,
            link2:link2,
            link3:link3,
            intrest:intrest
        }),
        headers:{
           "content-type":"application/json"
        }
       }).then(async(res)=>{
       
        alert("new user created")
       }).catch((err)=>{
        console.log(err);
       })
    }}>Submit</button>
  </div>
}

export default Inputs