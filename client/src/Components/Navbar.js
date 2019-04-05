import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

function Navbar(props) {
  const logout = () => {
    localStorage.clear();
    props.history.push('/login');
  };
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/jokes">Jokes</NavLink>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default withRouter(Navbar);
