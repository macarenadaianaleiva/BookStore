import React from 'react';
import { Item } from './Item'

export const ItemList = ( {productos = []} ) => {


    return (
        <div className="centrProd" >
            <h2 className="productosPrincipal">Nuestros Libros</h2>
            

            <div >
                { productos.map((item) => <Item {...item} key={item.id}/> )}
                
            </div>
        </div>
    )
}


