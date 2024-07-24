import React from 'react'
import Todos from './components/Todos'
import CreateTodo from './components/CreateTodo'
import { RecoilRoot } from 'recoil'
import FilterTodos from './components/FilterTodos'
/*
2 input boxes => title and description => atom
button
filter()todo => atom 

 
 */
const App = () => {
  return (
    <div>Todo App
      <RecoilRoot>
        <CreateTodo />
        <Todos />
        <FilterTodos/>
      </RecoilRoot>

    </div>

  )
}

export default App