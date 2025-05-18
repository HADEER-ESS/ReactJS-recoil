import React from 'react'
import { TodoListState } from '../../slicers/todo/state/todoListState.ts';
import { useRecoilState } from 'recoil';
import './style.css'

const TodoItemComp = ({task,isComplete, id}) => {
  const TODO_CONTAINER = isComplete ? "complete_task" : "new_task";
  // create state for updating or setting in tasklist recoil state
  const [todoListData, setTodoListData] = useRecoilState(TodoListState)
  const itemIndex = todoListData.findIndex((item)=> item.id === id)

  //function update todo status
  function updateStatus(){
    let newItem = {
      id: id,
      task : task,
      isComplete: !isComplete
    }
    let newList = [...todoListData.slice(0,itemIndex) , newItem, ...todoListData.slice(itemIndex+1)]

    setTodoListData(newList)
  }

  //function edit todo task
  function updateTask(e){
    console.log("event is " , e.target.value)
    let newItem = {
      id:id,
      task : e.target.value,
      isComplete:isComplete
    }

    let newList = [...todoListData.slice(0,itemIndex) , newItem, ...todoListData.slice(itemIndex+1)]

    setTodoListData(newList)
  }

  //function to delete task from list
  function deleteTask () {
    const newList = [...todoListData.slice(0,itemIndex) , ...todoListData.slice(itemIndex+1)]
    setTodoListData(newList)

  }
  return (
    <div className={TODO_CONTAINER}>
      <input id="input_style" type="text" value={task} onChange={updateTask} />
      <input
        type="checkbox"
        checked={isComplete}
        onChange={updateStatus}
      />
      <button onClick={deleteTask}>X</button>
    </div>
  )
}

export default TodoItemComp
