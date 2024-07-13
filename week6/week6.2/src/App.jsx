import axios from "axios";
import { useState, useEffect } from "react";
function App() {
  const [Id, setID] = useState(1);
  return (
    <div>
      <button
        style={{
          backgroundColor: Id === 1 ? "red" : "initial",
          padding: "10px",
        }}
        onClick={() => {
          setID(1);
        }}
      >
        1
      </button>
      <button
        style={{
          backgroundColor: Id === 2 ? "red" : "initial",
          padding: "10px",
        }}
        onClick={() => {
          setID(2);
        }}
      >
        2
      </button>
      <button
        style={{
          backgroundColor: Id === 3 ? "red" : "initial",
          padding: "10px",
        }}
        onClick={() => {
          setID(3);
        }}
      >
        3
      </button>
      <button
        style={{
          backgroundColor: Id === 4 ? "red" : "initial",
          padding: "10px",
        }}
        onClick={() => {
          setID(4);
        }}
      >
        4
      </button>
      <button
        style={{
          backgroundColor: Id === 5 ? "red" : "initial",
          padding: "10px",
        }}
        onClick={() => {
          setID(5);
        }}
      >
        5
      </button>
      <Todo id={Id} />
    </div>
  );
}

function Todo({ id }) {
  const [Todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("https://sum-server.100xdevs.com/todo?id=" + id)
      .then((result) => {
        setTodos(result.data.todo);
        console.log(result.data.todo);
      });
  }, [id]);
  return (
    <div style={{ border: "2px solid black", padding: "5px", margin: "5px" }}>
      <h1> id = {id}</h1>
      <h1>{Todos.title}</h1>
      <p>{Todos.description}</p>
      <p> {Math.random()}dnene we wekowk oe wpo w</p>
      {/* <p>{completed}</p> */}
    </div>
  );
}

export default App;
