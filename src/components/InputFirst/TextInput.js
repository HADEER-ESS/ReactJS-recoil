import React from 'react'
import { textState } from '../slicers/variables/textState'
import { useRecoilState } from 'recoil'
import "../styles/characterCounter.css"


const TextInput = () => {
    const [text, setText] = useRecoilState(textState)
    let inputID = text.length > 30 ? 'input_field_limit_error' : 'input_field_text'
  return (
    <div>
      <input 
        id={inputID}
        type="text" 
        maxLength={40}
        value={text} 
        onChange={(e)=>setText(e.target.value)}
      />
      <p>ECHO : {text}</p>
    </div>
  )
}

export default TextInput
