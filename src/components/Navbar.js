import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CartWidget } from './CartWidget'
import './estilos.css'

function NavBar() {
    return (
        <header className="encabezado">
            <h1>Logo</h1>
            <nav className="navgacion">
            <ul className="menu">
                <li><NavLink activeClassName={'activeLink'} exact to="/">Inicio</NavLink></li>
                <li><NavLink activeClassName={'activeLink'} exact to="/productos/">Libros</NavLink>
                <ul className= "submenu">
                <li><NavLink activeClassName={'activeLink'} exact to="/productos/Fantasía/">Fantasía</NavLink></li>
                <li><NavLink activeClassName={'activeLink'} exact to="/productos/terror/">Terror</NavLink></li>
                </ul>
                </li>
                <li><NavLink activeClassName={'activeLink'} exact to="/contacto">Contacto</NavLink></li>
                <li><Link to="/cart"><CartWidget/></Link></li>
            </ul>
                
                
            <div class="hide"  >
                <i class="fa fa-bars" aria-hidden="true" ></i> Menu
                
            </div>
            </nav>
        </header>
    )
}

export default NavBar;