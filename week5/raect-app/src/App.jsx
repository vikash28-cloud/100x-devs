import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([{
    title: "title 1",
    description: "desc 1",
    completed: true
  },
  {
    title: "title 2",
    description: "desc 2",
    completed: false

  }
  ])

function addtodo(){
  // ...todos spreads all the value of array and now you can add more values
  setTodos([...todos,{title:"random todo", description:"random description"}])
}

  return (
    <>
    <button onClick={addtodo}>Add a random todo</button>
      {
      todos.map((item)=>{
       return <Todo title= {item.title} description={item.description} />
      })
      }
      
    </>
  )
}

function Todo(props) {
  const [ done, setDone] = useState("not done")
  function completeornot(){
    if(done=="not done"){
      setDone("done")
    }else{
      setDone("not done")
    }
  }

  return <div>
    <h1>{props.title}</h1>
    <p>{props.description}</p>
    <button onClick={completeornot}>{done}
    </button>

  </div>
}




export default App
