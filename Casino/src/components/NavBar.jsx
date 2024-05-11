import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className="nav">
      <ul className="nav__ul">
        <li className="nav__li">
          <Link className="nav__link" to="/inicio">
            Inicio
          </Link>
        </li>
        <li className="nav__li">
          <Link className="nav__link" to="/operador">
            Operador
          </Link>
        </li>
        <li className="nav__li">
          <Link className="nav__link" to="/casino">
            Casino
          </Link>
        </li>
        <li className="nav__li">
          <Link className="nav__link" to="/slot">
            Slot
          </Link>
        </li>
        <li className="nav__li">
          <Link className="nav__link" to="/modelo">
            Modelo
          </Link>
        </li>
        <li className="nav__li">
          <Link className="nav__link" to="/fabricante">
            Fabricante
          </Link>
        </li>
      </ul>
    </nav>
  );
};
