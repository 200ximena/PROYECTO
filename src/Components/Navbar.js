import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../dist/css/Navbar.module.css'




const Navbar = () => {
  return(
          <nav className="navbar navbar-expand-lg color">
        <Link to="/" className="navbar-brand titulo"> TDO | TU DOCTOR ONLINE</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="menu" />
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="navbar-brand ">
              <Link to="/" className="nav-link">INICIO</Link>
            </li>

            <li className="navbar-brand t1">
              <Link to="/login" className="nav-link">LOGIN | USUARIO</Link>
            </li>
            <li className="navbar-brand t1">
              <Link to="/login" className="nav-link">LOGIN| MEDICO ESPECIALISTA</Link>
            </li>
            <li className="navbar-brand t2">
              <Link to="/register" className="nav-link">REGISTRARME</Link>
            </li>
          </ul>
        </div>
      </nav>


)
}

export default Navbar;