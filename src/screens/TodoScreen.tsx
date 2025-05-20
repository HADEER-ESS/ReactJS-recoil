import React from 'react'
import { useRecoilValue } from 'recoil'
import TodoItemComp from '../components/todo/TodoItem.tsx'
import TodoItemCreator from '../components/todo/TodoItemCreator.tsx'
import "../components/todo/style.css"
import filterTodoListState from '../slicers/todo/method/filterTodoListBasedOnState.ts'
import TodoListFilters from '../components/todo/TodoListFilters.tsx'
import TodoListStats from '../components/todo/TodoListStats.tsx'
// import { TodoListState } from '../slicers/todo/state/todoListState.ts'

const TodoScreen = () => {
  const todoList = useRecoilValue(filterTodoListState)
  return (
    <div className='screen_container'>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {
        todoList.map((item) =>
          <TodoItemComp item={item} />
        )
      }
    </div>
  )
}

export default TodoScreen
