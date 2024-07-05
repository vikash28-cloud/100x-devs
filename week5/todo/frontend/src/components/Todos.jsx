

const Todos = ({ todos }) => {
return <div>

    {
        todos.map((todo)=>{
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.descr}</h2>
                <button>{todo.completed==true?"completed":"not completed"}</button>
                
            </div>
        })
    }
</div>


}

export default Todos