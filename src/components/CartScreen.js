import React, { useContext } from 'react'
import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

export const CartScreen = () => {

    const {carrito, vaciarCarrito, removeItem, calcularTotal} = useContext(CartContext)


    return (
        <div>

            {
                carrito.length === 0
                ? <>
                    <h2>No hay productos agregados</h2>
                    <div className="link">
                    <Link className="irAComprar" to="/">Ir a comprar</Link>
                    </div>
                 </>
                :
                    <>
                        <h2>Resumen de compra</h2>
                        <hr/>

                        {
                            carrito.map( (prod) => (
                                
                                <div className="carritoMin">
                                    <h4>{prod.name}</h4>
                                    <img className="imgCarrito"  src={prod.img} width="20px" height="30"/>
                                    <p>Cantidad: {prod.cantidad}</p>
                                    <p>Precio: {prod.price * prod.cantidad}</p>
                                    <button  onClick={() => removeItem(prod.id)}>
                                        <BsFillTrashFill className="borrar"/>
                                    </button>
                                </div>
                                
                            ))
                        }

                        <hr/>
                        <h3 >Precio total: ${calcularTotal()}</h3>
                        <button className="vaciar"
                            
                            onClick={vaciarCarrito}
                        >
                            Vaciar carrito
                        </button>

                       <button className="vaciar"><Link to="/checkout" >
                            Terminar mi compra
                        </Link>
                        </button>
                    </>
            } 

        </div>
    )
}