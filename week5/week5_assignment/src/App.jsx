import { useEffect, useState } from "react"
import Card from "./components/Card"
import Inputs from "./components/Inputs.jsx"


function App() {
  const [data, setData] = useState([]);



  useEffect(() => {
    
    fetch("http://localhost:3000/users").then(async(result)=>{
      const json = await result.json();
      setData(json.allUsers);
        console.log(json.allUsers);
    })
  }, []);


  return (
    <>
      <Inputs />
      {
        data.map((item, index) => (
          <Card data={item} key={index} />
        ))
      }

    </>
  )
}

export default App
