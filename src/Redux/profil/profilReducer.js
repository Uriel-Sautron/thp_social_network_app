import Cookies from 'js-cookie';
import {
  PROFIL_REQUEST,
  PROFIL_SUCCESS,
  PROFIL_FAILURE,
  EDIT_PROFIL_REQUEST,
  EDIT_PROFIL_SUCCESS,
  EDIT_PROFIL_FAILURE,
} from './profilTypes';

const initialState = {
  isFetching: false,
  isAuthenticated: !!Cookies.get('id_token'),
  user: {},
};

const profilReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFIL_REQUEST:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
      };

    case PROFIL_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        errorMessage: '',
        user: action.user,
      };

    case PROFIL_FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message,
      };

    case EDIT_PROFIL_REQUEST:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
      };

    case EDIT_PROFIL_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        errorMessage: '',
        user: action.user,
      };

    case EDIT_PROFIL_FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message,
      };

    default:
      return state;
  }
};

export default profilReducer;
