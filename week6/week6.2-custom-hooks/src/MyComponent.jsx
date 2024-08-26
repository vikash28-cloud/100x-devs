import React, { useEffect, useState } from 'react'

const MyComponent = () => {
  const [render, setRender] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      if(render){
        setRender(false);
      }
      else
      {
        setRender(true);

      }
    }, 2000);
  },[render])
  return (
    <div>
      {
        render ? <Test /> : <div></div>
      }

    </div>
  )
}


const Test = () => {
  return <>
    <h1>this is Test Component</h1>


  </>
}


export default MyComponent