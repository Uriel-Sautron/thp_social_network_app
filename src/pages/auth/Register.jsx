import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { registerUser } from '../../Redux';

const Register = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
    };
    dispatch(registerUser(userData));
    history.push('/');
  };

  return (
    <section className="section">
      <div className="section-top">
        <h1>Register</h1>
      </div>
      <div className="main-register">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" name="username" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <button type="submit" className="btn-primary">
            Register
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;
