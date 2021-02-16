import React from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../Redux';

const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
    };
    dispatch(registerUser(userData));
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" name="username" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit" className="btn-submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
