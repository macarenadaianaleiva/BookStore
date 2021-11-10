import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router'
import { CartContext } from '../context/CartContext'
import Swal from 'sweetalert2'
import { UIContext } from '../context/UIContext'
import { Loader } from '../components/Loader'
import { generarOrden } from '../firebase/generarOrden'

export const Checkout = () => {

    const {loading, setLoading} = useContext(UIContext)
    const {carrito, calcularTotal, vaciarCarrito} = useContext(CartContext)

    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        email: '',
        tel: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (values.nombre.length < 3) {
            alert("Nombre inválido")
            return
        }
        if (values.apellido.length < 3) {
            alert("Apellido inválido")
            return
        }
        if (values.email.length < 3) {
            alert("Email inválido")
            return
        }
        if (values.tel.length < 7) {
            alert("Teléfono inválido")
            return
        }

        setLoading(true)
        generarOrden(values, carrito, calcularTotal())
            .then((res) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Orden registrada!',
                    text: `Guarde su comprobante: ${res}`,
                    willClose: () => {
                        vaciarCarrito()
                    }
                })
            })
           
            
          
    }

    return (
        <>
            {carrito.length === 0 && <Redirect to="/"/>}
            {loading && <Loader/>}

            <div>
                <h2 className="titLibro">Complete sus datos</h2>
                
                {/* listado de la compra */}
                <div className="form">
                <form onSubmit={handleSubmit}>
                    <h2 className="titLibro">Formulario</h2>
                    <input
                        className="input"
                        type="text"
                        placeholder="Nombre"
                        name="nombre"
                        value={values.nombre}
                        onChange={handleInputChange}
                        />
                    {values.nombre.length === 0 && <small>Este campo es obligatorio</small>}

                    <input
                        className="input"
                        type="text"
                        placeholder="Apellido"
                        name="apellido"
                        value={values.apellido}
                        onChange={handleInputChange}
                        />
                    {values.apellido.length === 0 && <small>Este campo es obligatorio</small>}

                    <input
                        className="input"
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                    />
                    {values.email.length === 0 && <small>Este campo es obligatorio</small>}

                    <input
                        className="input"
                        type="tel"
                        placeholder="Teléfono"
                        name="tel"
                        value={values.tel}
                        onChange={handleInputChange}
                    />
                    {values.tel.length === 0 && <small>Este campo es obligatorio</small>}

                    <button className="btn third" type="submit"> Finalizar</button>
                </form>
            </div>
            </div>
        </>
    )
}