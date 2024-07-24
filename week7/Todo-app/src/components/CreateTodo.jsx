import React from 'react'
import { useState } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil';
import { todosAtom } from '../store/atom/atom';


const CreateTodo = () => {
const [title,setTitle] = useState("");
const [desc,setDesc] = useState("");
const [todos,setTodos] = useRecoilState(todosAtom)

function addingTodos(){
    setTodos([...todos,{title:title,desc:desc}])
    setTitle("");
    setDesc("");
}

  return <>
  <div className='input'>
    <input onChange={(e)=>setTitle(e.target.value)} type="text" placeholder='title' /> 
    <input onChange={(e)=>setDesc(e.target.value)} type="text" placeholder='description' />
    <button onClick={addingTodos}
    >ADD TODO</button>
  </div>
  
  </>
}

export default CreateTodo