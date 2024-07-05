import { useEffect, useState } from "react"
import CreateTodo from "./components/CreateTodo.jsx"
import Todos from "./components/Todos.jsx"
function App() {

  const [todos, setTodos] = useState([]);
  useEffect(() => {

    fetch("http://localhost:3000/todos").then(async (result) => {
      const data = await result.json();
      console.log(data.allTodos[1]);
      setTodos(data.allTodos)
    })
    
  }, [])
  


  return (
    <>
      <CreateTodo />
      <Todos todos={todos} />
    </>
  )
}

export default App
