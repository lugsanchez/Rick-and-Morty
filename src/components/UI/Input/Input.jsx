import React from 'react'

export const Input = ({event}) => {
  return (
    <div>
        <input className="input" onChange={event} placeholder="Find a Character" type="text" />
    </div>
  )
}
