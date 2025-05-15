import React from 'react'
import { useRecoilValue } from 'recoil'
import { charCountState } from '../slicers/methods/getTextLength'

const CharacterCount = () => {
    let count = useRecoilValue(charCountState)
  return (
      <p id='counter'>
        count is {count}
      </p>
  )
}

export default CharacterCount
