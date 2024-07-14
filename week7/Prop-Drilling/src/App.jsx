import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Count count={count} setCount={setCount} />
    </>
  )
}

function Count({ count, setCount }) {
  return <div>
    {count}
    <Button count={count} setCount={setCount} />
  </div>
}

function Button({count,setCount}) {
  return<div>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    <button onClick={()=>setCount(count-1)}>Decrement</button>
  </div>

}
export default App