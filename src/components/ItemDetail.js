import React,  { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { ItemCount } from '../components/ItemCount'



export const ItemDetail = ({ id, name, price, img, description, category, stock} ) => {

    const {goBack, push} = useHistory()

    const {addToCart, isInCart} = useContext(CartContext)

    const [cantidad, setCantidad] = useState(0)

    const handleAgregar = () => {
        const newItem = {
            id,
            name,
            price,
            category,
            cantidad,
            img
           
        }

        if (cantidad > 0) {
            addToCart(newItem)
        }
    }

    return (
        <div className="carrito">
            
            <p className="descripcion"><h2 className="titLibro">{name}</h2><img className="texto" src={img} alt={name}/>{description}</p>
            <div className="precio">
            <h4>Precio: ${price}</h4>
            </div>
            {/* purchase option / counter */}

            { isInCart(id) 
            
                ? <div className="link"><Link to="/cart" className="btn btn-sm animated-button thar-four">Terminar mi compra</Link></div>
                :
                    <>
                        <ItemCount cantidad={cantidad} modify={setCantidad} max={stock}/>
                        <button className="btnAgregar"
                
                            onClick={handleAgregar}
                            >
                            Agregar 
                        </button>
                    </>
            }

<div className="volver">
            <button className="btnAgregar"
               
                onClick={() => goBack()}
            >
 Volver
            </button>

            <button className="btnAgregar" onClick={() => push("/")}>
 Back to top
            </button>
</div>

        </div>
    )
}