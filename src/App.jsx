import React, { useState } from 'react';
import Inicio from './Inicio/Inicio';
import Principal from './Principal/Principal';

import './App.css'

function App() {
    const [ iniciar, setIniciar ] = useState( false );
    const [ nombre, setNombre ] = useState( '' );
    return (
        <div className="app">
            { !iniciar ?
                <Inicio setIniciar={setIniciar} setNombre={setNombre}/>
                :
                <Principal nombre={nombre}/>
            }
        </div>
    );
}

export default App;