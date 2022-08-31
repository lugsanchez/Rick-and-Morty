import React from 'react'

export const CreateCard = ({card}) => {
    const {name, image, gender, species,status} = card;
  return (
    <div className='styleCard'>
        <div className='image'>
            <img className='imgCard' src={image} alt={name} />
        </div>
        <div className='txtContainer'>
            <h2>{name}</h2>
            <p>Gender: {gender}</p>
            <p>Species: {species}</p>
            <p>Status: {status}</p>
        </div>
    </div>
  )
}
