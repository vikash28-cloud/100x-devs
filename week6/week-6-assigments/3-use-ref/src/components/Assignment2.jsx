import React, { useState, useCallback } from 'react';
import { useRef } from 'react';

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Assignment2() {
    const [count,setCount] = useState(0);
    const noOfTimeClicked = useRef(0);
    const handleReRender = () => {
        setCount(count+1)
    };
    noOfTimeClicked.current=noOfTimeClicked.current +1;
    return (
        <div>
            <p>This component has rendered {noOfTimeClicked.current} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
};