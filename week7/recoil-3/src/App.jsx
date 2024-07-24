import React from "react";
import { RecoilRoot,useRecoilValue } from "recoil";
import { todoFamily } from "./Atoms";

function App() {
  return <RecoilRoot>
    <Todo id={1} />
    <Todo id={2} />
  </RecoilRoot>
}


function Todo({ id }) {
  const TodoAtom = useRecoilValue(todoFamily(id));
  return (
    <>
      <h1>{TodoAtom.title}</h1>
      {TodoAtom.description}
    </>
  )
}
export default App;