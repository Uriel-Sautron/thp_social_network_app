/* eslint-disable import/prefer-default-export */
import {
  requestProfil,
  receiveProfil,
  profilError,
  requestEditProfil,
  receiveEditProfil,
  editProfilError,
  requestOtherProfil,
  receiveOtherProfil,
  otherProfilError,
} from './profilActions';

export const userProfil = (token) => (dispatch) => {
  const config = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(),
  };

  dispatch(requestProfil());
  fetch('https://thp-strapi-social-network.herokuapp.com/users/me', config)
    .then((response) => response.json())
    .then((response) => {
      if (response.statusCode) {
        dispatch(profilError(response.message));
      } else {
        dispatch(receiveProfil(response));
      }
    });
};

export const editProfil = (user) => (dispatch) => {
  const userData = {
    username: user.name,
    description: user.description,
  };

  const config = {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${user.token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  };

  dispatch(requestEditProfil());
  fetch(
    `https://thp-strapi-social-network.herokuapp.com/users/${user.id}`,
    config
  )
    .then((response) => response.json())
    .then((response) => {
      if (response.statusCode) {
        dispatch(editProfilError(response.message));
      } else {
        dispatch(receiveEditProfil(response));
      }
    });
};

export const otherUserProfil = (token, id) => (dispatch) => {
  const config = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(),
  };

  dispatch(requestOtherProfil());
  fetch(`https://thp-strapi-social-network.herokuapp.com/users/${id}`, config)
    .then((response) => response.json())
    .then((response) => {
      if (response.statusCode) {
        dispatch(otherProfilError(response.message));
      } else {
        dispatch(receiveOtherProfil(response));
      }
    });
};
