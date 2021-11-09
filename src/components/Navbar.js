import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CartWidget } from './CartWidget'
import './estilos.css'





function NavBar() {
    return (
        <header className="encabezado">
            <h1> BookStore </h1>
            <nav className="navgacion">
            <ul className="menu">
                <li><NavLink activeClassName={'activeLink'} exact to="/">Inicio</NavLink></li>
                <li><NavLink activeClassName={'activeLink'} exact to="/productos/">Libros</NavLink>
                <ul className= "submenu">
                <li><NavLink activeClassName={'activeLink'} exact to="/productos/Fantasía/">Fantasía</NavLink></li>
                <li><NavLink activeClassName={'activeLink'} exact to="/productos/terror/">Terror</NavLink></li>
                </ul>
                </li>
               
                <li className="cart"><Link to="/cart"><CartWidget/></Link></li>
            </ul>

            </nav>
        </header>
    )
}



export default NavBar;
