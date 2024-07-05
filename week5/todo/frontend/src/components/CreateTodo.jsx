import React, { useState } from 'react'

const CreateTodo = () => {
  const [title, setTitle] = useState();
  const [descr, setDescr] = useState();
  return <div>
    <input id='title' style={{ padding: 10, margin: 10 }} type="text " placeholder='title' onChange={(e) => {
      const value = e.target.value;
      setTitle(e.target.value);
    }} />


    <br />


    <input id="descr" style={{ padding: 10, margin: 10 }} type="text" placeholder='description' onChange={(e) => {
      const value = e.target.value;
      setDescr(e.target.value);
    }} />


    <br />


    <button style={{ padding: 10, margin: 10 }}
      onClick={() => {
        fetch("http://localhost:3000/todo", {
          method: "POST",
          body:JSON.stringify( {
            title:  title ,
            descr:  descr 
          }),
          headers:{
            "content-type":"application/json"
          }
        }).then(async (res) => {
          const json = await res.json();
          alert("to added")
        })

      }}
    >Add to do</button>
  </div>
}

export default CreateTodo;