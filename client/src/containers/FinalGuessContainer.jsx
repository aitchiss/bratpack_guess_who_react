import React from 'react'
import CharacterSelect from '../components/CharacterSelect'

class FinalGuessContainer extends React.Component{

  render(){
    return (
      <div className="final-guess-container">
        <CharacterSelect characters={this.props.characters}/>
      </div>
    )
  }
}

export default FinalGuessContainer