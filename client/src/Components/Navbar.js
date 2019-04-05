import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import styled from 'styled-components';

//Component
function Navbar(props) {
  const IsLoggedIn = !!localStorage.getItem('token');

  const logout = () => {
    localStorage.clear();
    props.history.push('/login');
  };
  return (
    <SDNavbarCont>
      <NavLink activeClassName="active" className="navigation-link" to="/home">
        Home
      </NavLink>
      <NavLink activeClassName="active" className="navigation-link" to="/register">
        Register
      </NavLink>
      <NavLink activeClassName="active" className="navigation-link" to="/login">
        Login
      </NavLink>
      {IsLoggedIn && (
        <NavLink activeClassName="active" className="navigation-link" to="/jokes">
          Jokes
        </NavLink>
      )}
      <SDButtonLogout onClick={logout}>Logout</SDButtonLogout>
    </SDNavbarCont>
  );
}

//Styling Of Component

const SDNavbarCont = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100vw;
  height: 70px;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 20%;
  font-size: 1rem;
  color: #2359ac;
  cursor: pointer;

  .navigation-link {
    padding: 10px;
    text-decoration: none;
    color: #2359ac;
  }

  .active {
    text-decoration: none;
    color: #d81159;
  }
`;

const SDButtonLogout = styled.button`
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  color: white;
  background-color: #2359ac;
  font-size: 1rem;
  cursor: pointer;

  :hover {
    background-color: #d81159;
  }
`;

export default withRouter(Navbar);
