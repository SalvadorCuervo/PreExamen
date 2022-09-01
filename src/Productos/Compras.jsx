import React from 'react';

function Compras({ compras }) {
  return (
    <div className='divCompras'>
        <h4 className="mb-3"> Compras realizadas: </h4>
        { compras.map(( compra, index ) =>(
            <div key={index}>
                <h5> Compra {index+1} </h5>
                <div> <b> {`${compra.productoSelected.nombre} ($${compra.productoSelected.precio})`} </b> </div>
                <div> Cantidad ingresada: <b> ${compra.cantidadIngresada} </b> </div>

                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <div> Cambio: <b> ${compra.cambio} </b> </div>
                    </div>

                    <div className="col-md-6 col-sm-6">
                        { compra.monedasCambio.map(( moneda, index ) => (
                            <div key={index}> ${moneda} </div>
                        ))}
                    </div>
                </div>
                <hr/>
            </div>
        ))}
    </div>
  )
}

export default Compras;