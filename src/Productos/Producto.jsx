import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';

function Producto({ producto, setSelected }) {
    return (
        <div className="col-md-4 col-sm-12 mb-3 logo">
            <Card sx={{ minWidth: 150 }} onClick={() => setSelected(producto)}>
                <CardHeader
                    avatar={ <Avatar sx={{ bgcolor: red[500] }}> {producto.id} </Avatar> }
                    title={producto.nombre}
                    subheader={`$ ${producto.precio}`}
                />
            </Card>
        </div>
    )
}

export default Producto;