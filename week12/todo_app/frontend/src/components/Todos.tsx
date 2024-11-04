import React, { useEffect } from "react";

const Todos = () => {
  const [todos, setTodos] = React.useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const token = localStorage.getItem("token");
    console.log(token);
    const res = await fetch("http://localhost:3000/api/todos/allTodos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
    const data = await res.json();
    setTodos(data.allTodos);
    console.log(data)
    console.log(res)
  }
 

  return(<>
  
        <div>
          All Todos

        </div>
  
  
  
  
  
  
  </>);
};

export default Todos;
