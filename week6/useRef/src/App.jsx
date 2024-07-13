import React, { useEffect, useCallback, useMemo, useState, memo } from 'react'

const App = () => {
  const [counter, setCouner] = useState(0);
  let [value, setValue] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      console.log("after some time")
      setValue(10);
    }, 3000);
  }, [])

  console.log("before enter ")
  let sum = useMemo(() => {
    console.log("In Call")
    return value;
  }, [value])
  console.log("after enter")

  const function1 = useCallback(() => {
    console.log("function 1 is called");
  }, [])

  return (
    <div>

      <h1> counter = {counter}</h1>
      <button onClick={() => setCouner(counter + 1)}>click</button>
      <h1>{sum}</h1>
      <Hello function1={function1} />
    </div>
  )
}

// memo handles props if props are changed then this component will rerender again other wise it will not rerender
const Hello = memo(function ({ function1 }) {
  console.log("component rerender")
  return (
    <>
      <h1>Hello</h1>
      <button onClick={function1} >click</button>
    </>

  )
})



export default App