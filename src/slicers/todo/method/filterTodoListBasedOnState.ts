import { selector } from "recoil";
import { TodoListState } from "../state/todoListState.ts";
import todoFilterState from "../state/todoFilterState.ts";


const filterTodoListState = selector({
    key : 'filterTodoState',
    get : ({get}) => {
        let todoList = get(TodoListState);
        let todoListState = get(todoFilterState)

        console.log("todo list from selector ", todoList)

        switch(todoListState){
            case 'Show Uncompleted':
                return todoList.filter((item) => !item.isComplete)
            case 'Show Completed':
                return todoList.filter((item) => item.isComplete)
            default :
                return todoList
        }
    }
})


export default filterTodoListState