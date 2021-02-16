import React from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../Redux';

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      identifier: e.target[0].value,
      password: e.target[1].value,
    };
    dispatch(loginUser(userData));
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="Name or email" />
        <input type="password" placeholder="Password" />
        <button type="submit" className="btn-submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;