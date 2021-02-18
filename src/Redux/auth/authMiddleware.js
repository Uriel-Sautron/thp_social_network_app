import Cookies from 'js-cookie';
import {
  requestRegister,
  receiveRegister,
  registerError,
  requestLogin,
  receiveLogin,
  loginError,
} from './authActions';
import { userProfil } from '../profil/profilMiddleware';

export const registerUser = (userData) => (dispatch) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  };

  dispatch(requestRegister());
  fetch('http://localhost:1337/auth/local/register', config)
    .then((response) => response.json())
    .then((response) => {
      if (response.statusCode) {
        dispatch(registerError(response.message));
      } else {
        Cookies.set('id_token', response.jwt);
        dispatch(receiveRegister(response));
        dispatch(userProfil(Cookies.get('id_token')));
      }
    });
};

export const loginUser = (userData) => (dispatch) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  };

  dispatch(requestLogin());
  fetch(' http://localhost:1337/auth/local', config)
    .then((response) => response.json())
    .then((response) => {
      if (response.statusCode) {
        dispatch(loginError(response.message));
      } else {
        Cookies.set('id_token', response.jwt);
        dispatch(receiveLogin(response));
        dispatch(userProfil(Cookies.get('id_token')));
      }
    });
};
