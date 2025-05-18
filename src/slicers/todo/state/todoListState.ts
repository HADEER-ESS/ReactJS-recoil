import { atom } from "recoil";
import TodoItem from "../type/TodoItem";



export const TodoListState = atom<TodoItem[]>({
    key:'todoList',
    default: []
})