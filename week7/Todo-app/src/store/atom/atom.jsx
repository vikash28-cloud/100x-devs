import {atom, selector} from "recoil";


export const todosAtom = atom({
    key:"todosAtom",
    default:[{title:"title1 ",desc:"desc1 "},{title:"title2",desc:"desc2"}]
})

export const todoNameAtom = atom({
    key:"todoNameAtom",
    default:""
})

export const filteredTodosAtom = selector({
    key:"filteredTodos",

    get:(props)=>{
        const todos = props.get(todosAtom);
        const todoName = props.get(todoNameAtom);
        return todos.filter(todo=>todo.title.includes(todoName));
    }
})
