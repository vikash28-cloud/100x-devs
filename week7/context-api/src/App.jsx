import React, { useState } from 'react'
import { countContext } from './context';
import { useContext } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <countContext.Provider value={count}>
        <Count count={count} setCount={setCount} />
      </countContext.Provider>
    </>
  )
}

function Count({ count, setCount }) {
  return <div>
    <CountRenderer />
    <Button count={count} setCount={setCount} />
  </div>
}

function CountRenderer() {
  const count = useContext(countContext);
  return <div>
    {count}
  </div >
}

function Button({ setCount }) {
  const count = useContext(countContext);
  return <div>
    <button onClick={() => setCount(count + 1)}>Increment</button>
    <button onClick={() => setCount(count - 1)}>Decrement</button>
  </div>

}
export default App