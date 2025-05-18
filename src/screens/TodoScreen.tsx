import React from 'react'
import { useRecoilValue } from 'recoil'
import TodoItemComp from '../components/todo/TodoItem.tsx'
import TodoItemCreator from '../components/todo/TodoItemCreator.tsx'
import "../components/todo/style.css"
import { TodoListState } from '../slicers/todo/state/todoListState.ts'

const TodoScreen = () => {
    const todoList = useRecoilValue(TodoListState)
  return (
    <div className='screen_container'>
        <TodoItemCreator/>
      {
        todoList.map((item)=>
            <TodoItemComp id={item.id} task={item.task} isComplete={item.isComplete}/>
        )
      }
    </div>
  )
}

export default TodoScreen
