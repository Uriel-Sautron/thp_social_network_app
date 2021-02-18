import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../Redux';

const Navbar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogout = () => {
    dispatch(logout());
    history.push('/');
  };

  return (
    <header>
      <h1>THP Social Network</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {!isAuthenticated && (
          <li>
            <Link to="/register">Register</Link>
          </li>
        )}
        {!isAuthenticated && (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
        {isAuthenticated && (
          <li>
            <Link to="/profil">Profil</Link>
          </li>
        )}
      </ul>
      {isAuthenticated && (
        <button type="button" onClick={() => handleLogout()}>
          Logout
        </button>
      )}
    </header>
  );
};

export default Navbar;
