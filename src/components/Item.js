import React from "react";

export const Item = ( {id, name, price, img, description} ) => {

    // console.log(props)

    return (

        <div style={{ width: '18rem' }} className="m-3">
            <img variant="top" src={img} />
            <div>
                <h2>{name}</h2>
                <h3>{description}</h3>
                <p>Precio: ${price}</p>

                <button>Lo Quiero</button>
            </div>
        </div>
    )
}




export default Item;