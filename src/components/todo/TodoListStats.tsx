import React from 'react'
import { useRecoilValue } from 'recoil'
import todoListStatsState from '../../slicers/todo/method/todoListStatsState.ts'

const TodoListStats = () => {
    const {total, totalComplete, totalIncomplete, percentage} = useRecoilValue(todoListStatsState)
    let formattedPercentCompleted = Math.round(percentage)
  return (
     <ul>
      <li>Total items: {total}</li>
      <li>Items completed: {totalComplete}</li>
      <li>Items not completed: {totalIncomplete}</li>
      <li>Percent completed: {formattedPercentCompleted}</li>
    </ul>
  )
}

export default TodoListStats
