import React from 'react'
import PictureCard from './PictureCard'


const PictureArea = (props) => {

  const pictureCards = props.characters.map((character, index) =>{
    return <PictureCard img={character.img} name={character.name} key={index} />
  })

  return(
    <div className="picture-container">
      {pictureCards}
    </div>
  )

}


export default PictureArea