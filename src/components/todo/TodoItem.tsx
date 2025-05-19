import React from 'react'
import { TodoListState } from '../../slicers/todo/state/todoListState.ts';
import { useRecoilState } from 'recoil';
import './style.css'

const TodoItemComp = ({item}) => {
  const TODO_CONTAINER = item.isComplete ? "complete_task" : "new_task";
  // create state for updating or setting in tasklist recoil state
  const [todoListData, setTodoListData] = useRecoilState(TodoListState)
  const itemIndex = todoListData.findIndex((src)=> item === src)

  //function update todo status
  function updateStatus(){
    const newList = replaceItemAtIndex(todoListData, itemIndex, {
      ...item,
      isComplete: !item.isComplete,
    })
    setTodoListData(newList)
  }

  //function edit todo task
  function updateTask(e){
    const newList = replaceItemAtIndex(todoListData, itemIndex, {
      ...item,
      task: e.target.value,
    })

    setTodoListData(newList)
  }

  //function to delete task from list
  function deleteTask () {
    const newList = removeItemAtIndex(todoListData, itemIndex)
    setTodoListData(newList)

  }
  return (
    <div className={TODO_CONTAINER}>
      <input id="input_style" type="text" value={item.task} onChange={updateTask} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={updateStatus}
      />
      <button onClick={deleteTask}>X</button>
    </div>
  )
}

export default TodoItemComp


function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
