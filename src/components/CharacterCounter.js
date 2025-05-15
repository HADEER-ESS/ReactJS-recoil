import React from 'react'
import TextInput from './TextInput'
import CharacterCount from './CharacterCount'
import "../styles/characterCounter.css"

const CharacterCounter = () => {
  return (
    <div className='main'>
      <div className='container'>
        <TextInput/>
      <CharacterCount/>
      </div>
      
    </div>
  )
}

export default CharacterCounter
