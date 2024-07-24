import React from 'react'
import { useState } from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { countAtom, evenSelector } from './strore/atoms/atom';
import { useMemo } from 'react';
const App = () => {
  return (
    <div>
      <RecoilRoot>
      <Count />
      </RecoilRoot>
    
    </div>
  )
}
function Count() {
  return<div >
      <Button />
      <CountRenderer />
  </div>
}
function CountRenderer() {
  const count = useRecoilValue(countAtom)
  // const even= useMemo(()=>{
  //   return count%2==0;
  // },[count])
  const isEven = useRecoilValue(evenSelector);
  return<>
      <h1>{count}</h1>
      {
        isEven?<h1>Even</h1>:<h1>odd</h1>
      }
    </>
}

function Button() {
  const setCount = useSetRecoilState(countAtom);
  console.log("rerender")
  return<>
      <button onClick={() =>{ setCount(count=>count + 1)}}>increment</button>
      <button onClick={() =>{ setCount(count=>count - 1)}}>decrement</button>
    </>
}
export default App