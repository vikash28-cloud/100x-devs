interface TodoProp{
  title:string,
  desc:string,
  count:number,
}


function App() {
  

  return (
    <>
      <Todo title="vikash sharma" desc="hey this is title" count={3}/> 
    </>
  )
}


function Todo(props:TodoProp){
 
  return(
    <>
    <h1>{props.title}</h1>
    <h3>{props.desc}</h3>
    <h3>{props.count}</h3>
    </>
  )
}
export default App
