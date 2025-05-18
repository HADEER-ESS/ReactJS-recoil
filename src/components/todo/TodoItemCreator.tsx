import React, {useState} from 'react'
import { useSetRecoilState } from 'recoil'
import getID from '../../slicers/todo/method/genarateId.ts'
import { TodoListState } from '../../slicers/todo/state/todoListState.ts'

const TodoItemCreator = () => {
    const [inputValue, setInputValue] = useState('')
    //function to add task in TODO_STATE using => useSetRecoilState
    const setTodo = useSetRecoilState(TodoListState)

    function addTodoTaskState () {
        let newTask  = {
            id:getID(),
            task:inputValue,
            isComplete:false
            // status : Status.TODO
        }

        setTodo((oldTodo) => [
            ...oldTodo,newTask
        ])
        setInputValue('')
    }

  return (
    <div>
      <input 
        id="task_input"
        type="text" 
        maxLength={40}
        value={inputValue} 
        onChange={(e)=>setInputValue(e.target.value)}
      />
      <button onClick={addTodoTaskState}>add</button>
    </div>
  )
}

export default TodoItemCreator
