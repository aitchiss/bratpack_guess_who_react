import React from 'react'
import PictureCard from '../components/PictureCard'


class PictureContainer extends React.Component{

  

  render(){

    const pictureCards = this.props.characters.map((character, index) =>{
      return <PictureCard img={character.img} name={character.name} key={index} />
    })

    return(
      <div className="picture-container">
        {pictureCards}
      </div>
    )
  }

}


export default PictureContainer