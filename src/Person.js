import React from 'react'
import './App.css'

const Person = ({ item, removePerson }) => {
  return (
    <tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.idade}</td>
        <button className="btn-excluir" onClick={() => removePerson(item.id)}>Remover</button>
        
    </tr>
  )
}

export default Person