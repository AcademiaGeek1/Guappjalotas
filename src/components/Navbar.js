import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { NavbarTitulo } from '../styles/styles'

export const Navbar = () => {

    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src="https://res.cloudinary.com/dusnjqou6/image/upload/v1625867782/Guappjolotas/logo_vmnxyg.svg" alt="" width="50" height="44" />
                    </a>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#adadad" className="bi bi-cart2" viewBox="0 0 16 16" >
                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                        </svg>
                    </div>
                </div>
            </nav>
            <NavbarTitulo>Nada como una Guajolota para empezar el día</NavbarTitulo>
            <div className="input-group ms-4 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search align-self-center" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
                <input
                    type="text"
                    placeholder="sabor de guajalota, bebida..."
                    className="form-control me-5"
                    name="searchText"
                    autoComplete="off"
                >
                </input>
            </div>

            <nav className="navbar navbar-light bg-light">
                <div className="container">
                    <Link className="nav-item nav-link text-muted" aria-current="page" href="#" to="/Guajalotas">Guajolotas</Link>
                    <NavLink className="nav-item nav-link text-muted" exact to="/Bebidas">Bebidas</NavLink>
                    <NavLink className="nav-item nav-link text-muted" exact to="/Tamales">Tamales</NavLink>
                </div>
            </nav>
        </div>
    )
}
