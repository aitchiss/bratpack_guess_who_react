import React from 'react'

const PictureCard = (props) => {
  return (
    <div className="picture-card">
      <img src={props.img} />
      <p>{props.name}</p>
    </div>

  )
}


export default PictureCard