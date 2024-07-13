import React, {useMemo, useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  let count = useMemo(() => {
    let finalCount = 0;
    for (let i = 0; i <= inputValue; i++) {
      finalCount=finalCount+i;
    }
    return finalCount;
  }, [inputValue])

  return (
    <div>
      <input type="number" placeholder='find sum from 1 to n' onChange={((e) => setInputValue(e.target.value))} />
      <br />
      <h3> {`sum from 1 to ${inputValue} is ${count}`}</h3>

      <button onClick={() => setCounter(counter + 1)}>counter ({counter})</button>
    </div>
  )
}
export default App