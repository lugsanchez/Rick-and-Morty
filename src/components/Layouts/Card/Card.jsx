import React, {useEffect, useState} from 'react';
import {CreateCard} from '../../UI/CreateCard/CreateCard.jsx';
import { Input } from '../../UI/Input/Input.jsx';



export const Card = () => {
    const URL = 'https://rickandmortyapi.com/api/character';
    const [character, setCharacter] = useState([]);
    const [value, setvalue] = useState('')

    const fetchData =(URL) => {
      fetch(URL)
      .then(response => response.json())
      .then(data => data.results? setCharacter(data.results):console.log('no hay nada'))
    };

    useEffect(() => {
      fetchData(URL)
    }, [])
    
    const dataFilter = (event) => {
      if (event.target.value === "vacio") {
        return fetchData(URL)
      }
      else if (event.target.value !== "vacio") {
        setvalue(event.target.value)
        const newUrl = URL+"/?name="+value
        return fetchData(newUrl)
      }
    }
  return (
    <div className='divCard'>
      <Input event={dataFilter} />
      <main>
        {character.map((character,key) => <CreateCard key={character+key} card={character} />)}
      </main>
    </div>
  )
}