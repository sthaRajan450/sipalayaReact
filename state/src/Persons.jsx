import React from 'react'

const Persons = ({person}) => {
  return (
    <div>
      <img src={person.img} alt="" />
      <h1>Name: {person.name}</h1>
      <h2>Age: {person.age}</h2>
    </div>
  )
}

export default Persons
