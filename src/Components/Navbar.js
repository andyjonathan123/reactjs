import React from 'react';
import { NavLink } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authUser } from '../store';

function Navbar(props) {

  const {user} = useRecoilValue(authUser)
    return (
        
           <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/About">About</NavLink>

        </li>
        <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/Users">Users</NavLink>

        </li>
        <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/Users">{user.name}</NavLink>

        </li>
 
      </ul>
      
    </div>
  </div>
</nav> 
        
    );
}

export default Navbar;
