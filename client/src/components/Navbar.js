import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link 
        className="navbar-brand" 
        to="/">
        (React) Google Books Search
      </Link>
      <ul className="nav">
        <li className="nav-item">
          <NavLink 
            className={`nav-link text-info ${window.location.pathname === "/" ? "text-danger" : ""}`} 
            to="/">
            Search
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            className={`nav-link text-info ${window.location.pathname === "/saved" ? "text-danger" : ""}`} 
            to="/saved">
            Saved
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
