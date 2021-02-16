import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../Redux';

const Nav = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <header>
      <h1>THP Social Network</h1>
      <Link to="/">Home</Link>
      {!isAuthenticated && <Link to="/register">Register</Link>}
      {!isAuthenticated && <Link to="/login">Login</Link>}
      <Link to="/profile">Profile</Link>
      {isAuthenticated && (
        <button type="button" onClick={() => dispatch(logout())}>
          Logout
        </button>
      )}
    </header>
  );
};

export default Nav;
