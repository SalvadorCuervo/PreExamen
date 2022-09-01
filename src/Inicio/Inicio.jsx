import React, { createRef, useState } from 'react'

function Inicio({ setIniciar, setNombre }) {
    const nombreRef = createRef('');

    const iniciar = (evt) => {
        evt.preventDefault();

        const nombre = nombreRef.current.value;
        if( nombre !== '' ){
            setIniciar( true );
            setNombre( nombre );

            var body = document.getElementById( 'body' );
            body.className = "noFlex";
        }
    }

    return (
        <div className="card">
            <form onSubmit={iniciar}>
                <h5 className="mb-2"> Ingresa tu nombre </h5>
                <input className="form-control mb-2" type="text" placeholder="Nombre" ref={nombreRef}/>
                <button type="submit" className="form-control btn btn-primary"> INICIAR </button>
            </form>
        </div>
    );
}

export default Inicio;