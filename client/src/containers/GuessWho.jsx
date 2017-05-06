import React from 'react'
import PictureContainer from './PictureContainer'
import QandAContainer from './QandAContainer'

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
        img: 'http://68.media.tumblr.com/7bae56160d84dc1de8113a79e3bc4df6/tumblr_mof4tnzKhV1r32kzio1_r1_500.jpg',
        hair: 'red',
        eyes: 'brown'},
        {id: 3,
        name: 'Judd Nelson',
        img: 'https://s-media-cache-ak0.pinimg.com/originals/f3/65/fd/f365fda69653c71427b0dbcb0346b2a4.jpg',
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
        img: 'https://s-media-cache-ak0.pinimg.com/736x/aa/c1/4c/aac14c485bf3b4253cf71b4e880b849c.jpg',
        hair: 'brown',
        eyes: 'blue'},
        {id: 6,
        name: 'Andrew McCarthy',
        img: 'https://weewestchester.com/wp-content/uploads/2017/03/Pretty-in-Pink-andrew-mccarthy-novel.jpg',
        hair: 'brown',
        eyes: 'blue'},
        {id: 7,
        name: 'Demi Moore',
        img: 'http://www.hollywoodreporter.com/sites/default/files/2015/06/demi_moore_st_elmos_fire_p_15_everett.jpg',
        hair: 'brown',
        eyes: 'brown'}
      ],

      questionItems: ['female', 'male', 'glasses', 'red hair', 'brown hair', 'blonde hair', 'brown eyes', 'blue eyes' ]
     

    }
  }

  render(){
    return (
      <div id="guess-who-game">
        <h1>Guess Who?</h1>
        <PictureContainer characters={this.state.characters}/>
        <QandAContainer questionItems={this.state.questionItems}/>
      </div>
    )
  }
}


export default GuessWho