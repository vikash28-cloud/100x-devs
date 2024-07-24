import React from 'react'
import { useRecoilValue } from 'recoil'
import { todosAtom } from '../store/atom/atom'

const Todos = () => {
    const todos = useRecoilValue(todosAtom);
    return (
        <div>

            <h1>All todos</h1>
            {
                todos.map((item, index) => (
                    <div key={index}>
                        <h2 >{item.title}</h2>
                        <p>{item.desc}</p>
                    </div>

                ))
            }

        </div>
    )
}

export default Todos