import {atomFamily} from "recoil";
import { TODOS } from "./todos";

export const todoFamily = atomFamily({
    key:"todosAtomFamily",
    default:id=>{
        return TODOS.find(item=>item.id===id);
    }
    
})