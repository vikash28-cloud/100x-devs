
import React, { memo, useCallback, useState } from 'react'

const App = () => {
    const [counter, setCounter] = useState(0);
    const increment = useCallback(() => {
        console.log("function called")
    },[])
    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>Counter {counter}</button>
            <Demo increment={increment} />
        </div>
    )
}

const Demo = memo(function ({ increment }) {
    console.log("rerender")
    return (
        <button>button clicked</button>
    )
})

export default App