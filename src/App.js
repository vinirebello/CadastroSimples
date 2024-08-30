import * as React from 'react'
import './App.css';
import { useState } from 'react'
import Forms from './Form.js'
import Person from './Person.js'

function App() {

  const [person, setPerson] = useState([]);

  const addPerson = (name, idade) => {

    const newPerson = [...person, 
      {
      id: Math.floor(Math.random() * 100),
      name,
      idade
    }];

    setPerson(newPerson);
  }

  const removePerson = (id) => {
    const newPerson = [...person]
    const filterPersonId = newPerson.filter((item) => item.id !==id ? item : null);
    setPerson(filterPersonId);
  };

  return (
    <div className="container">
      <Forms addPerson={addPerson}/>
      <div className="containerTable">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Idade</th>
            </tr>
          </thead>
          <tbody>
            {person.map((item) => (
              <Person key={item.id} item={item} removePerson={removePerson}/>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
