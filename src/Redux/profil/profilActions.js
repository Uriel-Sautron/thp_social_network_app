import {
  PROFIL_REQUEST,
  PROFIL_SUCCESS,
  PROFIL_FAILURE,
  EDIT_PROFIL_REQUEST,
  EDIT_PROFIL_SUCCESS,
  EDIT_PROFIL_FAILURE,
} from './profilTypes';

export const requestProfil = () => ({
  type: PROFIL_REQUEST,
  isFetching: true,
});

export const receiveProfil = (response) => ({
  type: PROFIL_SUCCESS,
  isFetching: false,
  user: response,
});

export const profilError = (message) => ({
  type: PROFIL_FAILURE,
  isFetching: false,
  message,
});

export const requestEditProfil = () => ({
  type: EDIT_PROFIL_REQUEST,
  isFetching: true,
});

export const receiveEditProfil = (response) => ({
  type: EDIT_PROFIL_SUCCESS,
  isFetching: false,
  user: response,
});

export const editProfilError = (message) => ({
  type: EDIT_PROFIL_FAILURE,
  isFetching: false,
  message,
});
