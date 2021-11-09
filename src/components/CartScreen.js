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
                <div className="centerProductos">
                    <h2 className="centerProd">No hay productos agregados</h2>
                    
                    
                    <Link className=" btn-three" to="/">Ir a comprar</Link>
                    </div>
                    
                    
                 </>
                :
                    <>
                       <div className="carrito"><h2 className="titLibro">Resumen de compra</h2></div>
                        

                        {
                            carrito.map( (prod) => (
                                
                                <div className="carritoMin">
                                    <h4>{prod.name}</h4>
                                    <img className="imgCarrito"  src={prod.img} width="20px" height="30"/>
                                    <p>Cantidad: {prod.cantidad}</p>
                                    <p>Precio: {prod.price * prod.cantidad}</p>
                                    <button className="btnBorrar" onClick={() => removeItem(prod.id)}>
                                        <BsFillTrashFill className="borrar"/>
                                    </button>
                                </div>
                                
                            ))
                        }

                        <hr/>
                        <h3 className="precioTotal" >Precio total: ${calcularTotal()}</h3>
                       <div className="finCompra">
                        <button className="btn first"
                            
                            onClick={vaciarCarrito}
                        >
                            Vaciar carrito
                        </button>

                       <button className="btn third"><Link to="/checkout" >
                            Terminar Compra
                        </Link>
                        </button>
                        </div>
                    </>
            } 

        </div>
    )
}