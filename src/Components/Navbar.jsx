import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../Redux';
import homeIcon from '../assets/images/Budgie.svg';

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
      <Link to="/">
        <img src={homeIcon} alt="Piou piou" />
      </Link>
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
        <button
          type="button"
          className="btn-danger"
          onClick={() => handleLogout()}
        >
          Logout
        </button>
      )}
    </header>
  );
};

export default Navbar;
