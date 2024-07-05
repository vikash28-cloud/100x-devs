import { useEffect } from "react";
import { useMemo, useState } from "react"
import React from "react";
function App() {
  return (
    <>


    <Hooks/>
      <CardWrapper>
        <div>
          hi there
        </div>
      </CardWrapper>

      <CardWrapper>
        <div>
          hello there
        </div>
      </CardWrapper>





    </>
  )
}

// useffect  = agar kisi data kuchh change ho to page reload ho jae

function Hooks() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    alert("hey page is reloading")

  }, [counter])
  
  return (
    <>
      <button onClick={() => {
        setCounter(counter + 1);
      }}>click here</button>
      <h1>my value is {counter}</h1>

    </>
  )
}


function CardWrapper({ children }) {
  return (
    <div style={{ border: "2px solid black", padding: "10px", margin: "10px" }}>
      {children}
    </div>
  )
}


export default App
