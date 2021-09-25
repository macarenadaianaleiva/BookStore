import React from 'react'
import './estilos.css'

function NavBar() {
    return (
        <header className="encabezado">
            <h1>Logo</h1>
            <nav>
                <a href="#">Inicio</a>
                <a href="#">Productos</a>
                <a href="#">Nosotros</a>
                <a className="material-icons">shopping_cart</a>
            </nav>
        </header>
    )
}

export default NavBar;