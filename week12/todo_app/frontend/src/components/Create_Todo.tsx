import React, { useState } from "react";
import { Link } from "react-router-dom";

const Create_Todo = () => {
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function createTodoFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(userId, title, description);

    const res = await fetch("http://localhost:3000/api/todos/createTodo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        userId: Number(userId),
      }),
    });

    if (res.ok) {
      alert("Todo created");
    } else {
      alert("Failed to create todo");
    }
  }

  return (
    
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">Create Todo</h1>

     

      <form onSubmit={createTodoFormSubmit} className="flex flex-col space-y-4">
        <input
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          onChange={(e) => setUserId(e.target.value)}
          value={userId}
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          type="number"
          placeholder="Enter your ID"
        />
        <button
          type="submit"
          className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Submit
        </button>
      </form>

      <Link
        to="/todos"
        className="mt-5 inline-block p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
      >
        All Todos
      </Link>
    </div>
  );
};

export default Create_Todo;
