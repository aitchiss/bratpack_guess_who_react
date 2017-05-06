import React from 'react'
import PictureContainer from './PictureContainer'
import QandAContainer from './QandAContainer'
import FinalGuessContainer from './FinalGuessContainer'

class GuessWho extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      characters: [
        {id: 1,
        name: 'Ally Sheedy', 
        img: 'https://s-media-cache-ak0.pinimg.com/736x/4a/dc/fe/4adcfe2950ad9c75d2b5566cf4224b4f.jpg',
        female: true,
        'brown hair': true,
        'brown eyes': true},
        {id: 2,
        name: 'Molly Ringwald',
        img: 'http://68.media.tumblr.com/7bae56160d84dc1de8113a79e3bc4df6/tumblr_mof4tnzKhV1r32kzio1_r1_500.jpg',
        female: true,
        'red hair': true,
        'brown eyes': true,
        'earrings': true},
        {id: 3,
        name: 'Judd Nelson',
        img: 'https://s-media-cache-ak0.pinimg.com/originals/f3/65/fd/f365fda69653c71427b0dbcb0346b2a4.jpg',
        male: true,
        'brown hair': true,
        'brown eyes': true,
        'wearing a shirt': true},
        {id: 4,
        name: 'Emilio Estevez',
        img: 'https://s-media-cache-ak0.pinimg.com/originals/56/39/32/5639327c3067065fa864cf263f869285.jpg',
        male: true,
        'brown hair': true,
        'blue eyes': true,
        'wearing a shirt': true},
        {id: 5, 
        name: 'Anthony Michael Hall',
        img: 'https://s-media-cache-ak0.pinimg.com/736x/cd/36/e0/cd36e0aa0c9536a9e52a4bcdfef8c970.jpg',
        male: true,
        'blonde hair': true,
        'blue eyes': true,
        glasses: 'true'},
        {name: 'Rob Lowe',
        img: 'https://s-media-cache-ak0.pinimg.com/736x/aa/c1/4c/aac14c485bf3b4253cf71b4e880b849c.jpg',
        male: true,
        'brown hair': true,
        'blue eyes': true,
        'wearing a shirt': true,
        'earrings': true},
        {id: 6,
        name: 'Andrew McCarthy',
        img: 'https://weewestchester.com/wp-content/uploads/2017/03/Pretty-in-Pink-andrew-mccarthy-novel.jpg',
        male: true,
        'brown hair': true,
        'blue eyes': true},
        {id: 7,
        name: 'Demi Moore',
        img: 'http://www.hollywoodreporter.com/sites/default/files/2015/06/demi_moore_st_elmos_fire_p_15_everett.jpg',
        female: true,
        'brown hair': true,
        'brown eyes': true,
        'earrings': true}
      ],

      questionItems: ['female', 'male', 'glasses', 'red hair', 'brown hair', 'blonde hair', 'brown eyes', 'blue eyes', 'wearing a shirt', 'earrings' ],
      currentAnswer: '',
      finalGuessResult: ''
    }

    this.indexOfPersonToGuess = Math.floor(Math.random() * this.state.characters.length)
  }

  answerQuestion(questionIndex){
    let question = this.state.questionItems[questionIndex]
    if (this.state.characters[this.indexOfPersonToGuess][question]){
      this.setState({currentAnswer: 'Yes!'})
    } else {
      this.setState({currentAnswer: 'Nope!'})
    }
  }

  processFinalGuess(guessedCharacterIndex){
    if (parseInt(guessedCharacterIndex) === this.indexOfPersonToGuess){
      this.setState({finalGuessResult: 'Correct - you win!'})
    } else {
      this.setState({finalGuessResult: 'Wrong - you lose!'})
    }
  }

  render(){
    return (
      <div id="guess-who-game">
        <h1>Guess Who? -- Bratpack Edition!</h1>
        <PictureContainer characters={this.state.characters}/>
        <QandAContainer questionItems={this.state.questionItems} answerQuestion={this.answerQuestion.bind(this)} answer={this.state.currentAnswer}/>
        <FinalGuessContainer characters={this.state.characters} finalGuessHandler={this.processFinalGuess.bind(this)} finalGuessResult={this.state.finalGuessResult} />
      </div>
    )
  }
}


export default GuessWho