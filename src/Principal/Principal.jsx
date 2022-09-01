import React, { useState } from 'react';
import Productos from '../Productos/Productos';
import Compras from '../Productos/Compras';

function Principal({ nombre }) {
    const [ compras, setCompras ] = useState( [] );

    return (
        <React.Fragment>
            <h2> Bienvenido {nombre} </h2>
            <div className="card">
                <div className="container">
                    <div className="row ">
                        <div className="col-md-8 col-sm-12">
                            <Productos compras={compras} setCompras={setCompras}/>
                        </div>

                        <div className="col-md-4 col-sm-12">
                            <Compras compras={compras}/>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Principal;