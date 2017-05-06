import React from 'react'
import CharacterSelect from '../components/CharacterSelect'

class FinalGuessContainer extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      currentGuess: 0
    }
  }

  updateCurrentGuess(characterIndex){
    this.setState({currentGuess: characterIndex})
  }

  handleButtonClick(){
    this.props.finalGuessHandler(this.state.currentGuess)
  }

  render(){
    return (
      <div className="final-guess-container">
        <p>make your final guess: </p>
        <CharacterSelect characters={this.props.characters} onChangeHandler={this.updateCurrentGuess.bind(this)}/>
        <button className="final-guess" onClick={this.handleButtonClick.bind(this)}>guess</button>
        <p className="final-guess-result">{this.props.finalGuessResult}</p>
      </div>
    )
  }
}

export default FinalGuessContainer