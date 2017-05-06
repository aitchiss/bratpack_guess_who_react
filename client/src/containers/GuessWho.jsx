import React from 'react'
import PictureContainer from './PictureContainer'

class GuessWho extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      characters: [
        {id: 1,
        name: 'Ally Sheedy', 
        img: 'https://s-media-cache-ak0.pinimg.com/736x/4a/dc/fe/4adcfe2950ad9c75d2b5566cf4224b4f.jpg',
        hair: 'brown',
        eyes: 'brown'},
        {id: 2,
        name: 'Molly Ringwald',
        img: 'https://s-media-cache-ak0.pinimg.com/originals/cc/eb/cd/ccebcde0a2a606a4fb3008659d4c93fc.jpg',
        hair: 'red',
        eyes: 'brown'},
        {id: 3,
        name: 'Judd Nelson',
        img: 'http://thedevilyouknow.tv/content/images/thedevilyouknow.tv/news/Bret-Easton-Ellis-Interviews-Judd-Nelson_853500b4386b4349907d6a4d577298c6.jpg',
        hair: 'brown',
        eyes: 'brown'},
        {id: 4,
        name: 'Emilio Estevez',
        img: 'https://s-media-cache-ak0.pinimg.com/originals/56/39/32/5639327c3067065fa864cf263f869285.jpg',
        hair: 'brown',
        eyes: 'blue'},
        {id: 5, 
        name: 'Anthony Michael Hall',
        img: 'https://s-media-cache-ak0.pinimg.com/736x/cd/36/e0/cd36e0aa0c9536a9e52a4bcdfef8c970.jpg',
        hair: 'blonde',
        eyes: 'blue',
        glasses: 'true'},
        {name: 'Rob Lowe',
        img: 'https://sgrumbleoutloud.files.wordpress.com/2013/05/rob-lowe.jpg',
        hair: 'brown',
        eyes: 'blue'},
        {id: 6,
        name: 'Andrew McCarthy',
        img: 'https://s-media-cache-ak0.pinimg.com/736x/c0/70/d9/c070d9226240b8fc5d94bb2a76373ada.jpg',
        hair: 'brown',
        eyes: 'blue',
        glasses: 'true'},
        {id: 7,
        name: 'Demi Moore',
        img: 'http://www.hollywoodreporter.com/sites/default/files/2015/06/demi_moore_st_elmos_fire_p_15_everett.jpg',
        hair: 'brown',
        eyes: 'brown'}
      ]

    }
  }

  render(){
    return (
      <div id="guess-who-game">
        <h1>Guess Who?</h1>
        <PictureContainer characters={this.state.characters}/>
      </div>
    )
  }
}


export default GuessWho