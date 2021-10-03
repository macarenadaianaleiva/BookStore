import React from 'react';
import { Item } from './Item'

export const ItemList = ( {productos = []} ) => {


    return (
        <div >
            <h2>Nuestros productos</h2>
            <hr/>

            <div >
                { productos.map((item) => <Item {...item} key={item.id}/> )}
                
            </div>
        </div>
    )
}


  
   
export default ItemList;