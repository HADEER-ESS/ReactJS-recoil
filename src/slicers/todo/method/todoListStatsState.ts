import { selector } from "recoil";
import { TodoListState } from "../state/todoListState.ts";

const todoListStatsState = selector({
    key : 'todolistStatsState',
    get : ({get}) => {
        let todoList = get(TodoListState)

        let total = todoList.length
        let totalComplete = todoList.filter((task) => task.isComplete).length
        let totalIncomplete = total - totalComplete
        let percentage = total === 0 ? 0 : totalComplete / total * 100;


        return{
            total,
            totalComplete,
            totalIncomplete,
            percentage
        }
    }
})



export default todoListStatsState