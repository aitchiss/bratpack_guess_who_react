import React from 'react'

const CharacterOption = (props) => {
  return(
    <option value={props.value}>{props.name}</option>
  )
}

export default CharacterOption