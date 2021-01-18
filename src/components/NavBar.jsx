import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar(props) {
  return (
    <nav className="nav-bar">
      <div className="nav-bar__wrapper">
        <div className="nav-bar__inner">
          <div className="nav-bar__items">
            <NavLink className="nav-bar__item" exact to="/" activeClassName="nav-bar__item_active">Todos</NavLink>
            <NavLink className="nav-bar__item" to="/add-todos" activeClassName="nav-bar__item_active">Add Todos</NavLink>
          </div>
        </div>    
      </div>  
    </nav>
  )
}

export default NavBar;