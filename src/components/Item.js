import React from "react";
import { Link } from 'react-router-dom'


export const Item = ( {id, name, price, img, autor,category} ) => {

    // console.log(props)

    return (

        <div className="texCen" style={{ width: '18rem' }} >
            <img className="imgPrincipal" variant="top" src={img} />
            <div className="texCen">
                <h2>{name}</h2>
                <h3>{autor}</h3>
                <p>Precio: ${price}</p>
                <p>Categoria: {category}</p>

                <Link to={`/detail/${id}`}>

                <button class="btn third">Lo Quiero</button> 
                </Link>
            </div>
        </div>

        
    )


    
}

