import React, { useState } from 'react';
import Chip from '@mui/material/Chip';

import Producto from './Producto';

const productos = [
    {
        id: 'A',
        nombre: 'Producto A',
        precio: 270,
    },
    {
        id: 'B',
        nombre: 'Producto B',
        precio: 340,
    },
    {
        id: 'C',
        nombre: 'Producto C',
        precio: 390,
    },
];

const monedas = [ 100, 50, 10 ];

function Productos({ compras, setCompras }) {
    const [ productoSelected, setProductoSelected ] = useState( null );
    const [ cantidadIngresada, setCantidadIngresada ] = useState( null );
    const [ monedasSelected, setMonedasSelected ] = useState( [] );

    const seleccionarProducto = ( producto ) => {
        setProductoSelected( producto );
        setCantidadIngresada( 0 );
        setMonedasSelected( [] );
    }

    const agregarMoneda = ( moneda ) => {
        if( productoSelected.precio > cantidadIngresada  ){
            setMonedasSelected([ ...monedasSelected, moneda ]);
            setCantidadIngresada( cantidadIngresada + moneda );
        }
    }

    const calcularCambio = ( precioProducto, cantidadIngresada ) => {
        var cambio = cantidadIngresada - precioProducto; //Se calcula la cantidad de cambio
        var monedasCambio = []; //Array que almacenara las monedas utilizadas

        monedas.map( moneda => { //Recorremos las monedas que podemos utilizar [100, 50, 10]
            while( cambio >= moneda ){
                monedasCambio = [ ...monedasCambio, moneda ]; //Agregamos moneda utilizada
                cambio = cambio - moneda; //Restamos cantidad del cambio a entregar
            }
        });
        const compra = { productoSelected, cantidadIngresada, cambio: cantidadIngresada - precioProducto, monedasCambio };
        setCompras([ ...compras, compra ]); //Almacenamos la compra realizada
    }

    return (
        <React.Fragment>
            <h4 className="mb-3"> Selecciona un producto: </h4>
            <div className="row text-center">
                { productos.map( producto => (
                    <Producto key={producto.id} producto={producto} setSelected={seleccionarProducto}/>
                ))}
            </div>

            { productoSelected &&
                <React.Fragment>
                    <hr />
                    <h5> <b> {productoSelected.nombre} </b> Seleccionado <b> {`($${productoSelected.precio})`} </b> </h5>
                    
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div> Ingrese monedas: </div>
                            { monedas.map(( moneda, index ) => (
                                <label key={index} className="mt-2 mb-2">
                                    <Chip label={`$ ${moneda}`} variant="outlined" 
                                        onClick={() => agregarMoneda(moneda)}/>
                                </label>
                            ))}

                            { monedasSelected.map(( moneda, index ) => (
                                <div key={index}> ${moneda} </div>
                            ))}
                        </div>
                        
                        { cantidadIngresada > 0 &&
                            <div className="col-md-6 col-sm-12">
                                <div> Cantidad Ingresada: </div>
                                <h5> <b> ${cantidadIngresada} </b> </h5>

                                { cantidadIngresada >= productoSelected.precio &&
                                    <button onClick={() => calcularCambio(productoSelected.precio, cantidadIngresada)}> Realizar Compra </button>
                                }
                            </div>
                        }
                    </div>
                </React.Fragment>
            }
        </React.Fragment>
    )
}

export default Productos;