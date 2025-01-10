import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch("http://localhost:3000/api/todos/allTodos", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch todos");
      }

      const data = await res.json();
      setTodos(data.allTodos);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">All Todos</h1>
      
      <Link
        to="/createTodo"
        className="inline-block p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
      >
        Create Todo
      </Link>

      {error && <p className="text-red-600 mt-4">{error}</p>}

      <div className="mt-4">
        {todos.length > 0 ? (
          todos.map((todo) => (
            <div key={todo.id} className="p-4 border border-gray-300 rounded-lg mb-2">
              <h2 className="font-bold">{todo.title}</h2>
              <p>{todo.description}</p>
            </div>
          ))
        ) : (
          <p>No todos found.</p>
        )}
      </div>
    </div>
  );
};

export default Todos;
