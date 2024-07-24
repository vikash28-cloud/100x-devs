import React from 'react'
import { useState,useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import { filteredTodosAtom, todoNameAtom, todosAtom } from '../store/atom/atom';

const FilterTodos = () => {
    const [todoName, setTodoName] = useRecoilState(todoNameAtom);
    const filteredTodos = useRecoilValue(filteredTodosAtom)
    
    return (
        <div>
            <input type="text" onChange={(e) => setTodoName(e.target.value)} />

            <div>
                {
                    todoName!=""&&filteredTodos.length>0?(filteredTodos.map((item,index)=>(
                        <div key={index}>
                            <h1>{item.title}</h1>
                            <p>{item.desc}</p>
                        </div>
                    ))):(<h1>search todos</h1>)


                    
                }

            </div>
        </div>

    )
}

export default FilterTodos