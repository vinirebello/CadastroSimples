import * as React from 'react'
import {useState} from 'react'
import './App.css'

function Forms({addPerson}){

    const [name, setName] = useState("");
    const [idade, setIdade] = useState("");

    const submitBtn = (e) => {
        e.preventDefault();
        if(!name || !idade) return;
        addPerson(name, idade);
        setName("");
        setIdade("");

    }

    return(
    <div className="forms">
        <form onSubmit={submitBtn}>
            <input value={name} type="text" placeholder='Digite seu nome' onChange={(e) => setName(e.target.value)}/>
            <input value={idade} type="number" placeholder='Digite sua idade' onChange={(e) => setIdade(e.target.value)}/>
            <button type="submit">Enviar</button>
        </form>
    </div>
    )
}

export default Forms