import React, {useEffect, useState } from 'react'
import { useRef } from 'react';

const UseRef = () => {
    const [containerValue,setContainerValue] = useState(2000);
    const contRef = useRef();

    useEffect(() => {
    setTimeout(() => {
        contRef.current.innerHTML = 10;
    }, 5000);
      
    }, [])
    
    return (
        <>
            <p>
                hello there my name is vikash sharma
            </p>
            <div id='container' ref={contRef}>
                {containerValue}
            </div>
        </>
    )
}

export default UseRef