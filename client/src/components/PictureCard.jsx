import React from 'react'

class PictureCard extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      img: this.props.img,
      name: this.props.name,
      
    }
  }

  onCardClick(){
    this.setState((prevState) => {
      if (prevState.img === this.props.img){
        return {img: 'http://s3.amazonaws.com/theleakycauldron/pictures/crafts/tutorials_instructions_step_by_step_pictures/othercrafts/games/hpguesswho/normal_otherrafts_games_guesswhogame_redquestlightning_lezlishae_makani_randolfo.jpg', name: 'Guess Who?'}
      } else {
        return {img: this.props.img, name: this.props.name}
      }
    })
  }
  
  render(){


    return (
      <div className="picture-card" onClick={this.onCardClick.bind(this)}>
        <img src={this.state.img} />
        <p>{this.state.name}</p>
      </div>

    )
  }
  
}


export default PictureCard