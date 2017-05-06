import React from 'react'
import CharacterOption from './CharacterOption'

class CharacterSelect extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      currentSelection: 0
    }
  }

  updateSelection(e){
    this.setState({currentSelection: e.target.value})
    this.props.onChangeHandler(e.target.value)
  }

  render(){

    const characterOptions = this.props.characters.map((character, index) => {
      return <CharacterOption key={index} value={index} name={character.name}/>
    })

    return(
      <select onChange={this.updateSelection.bind(this)}>
        {characterOptions}
      </select>
    )
  }

}

export default CharacterSelect