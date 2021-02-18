import {
  NEW_POST_REQUEST,
  NEW_POST_SUCCESS,
  NEW_POST_FAILURE,
  GET_ALL_POST_REQUEST,
  GET_ALL_POST_SUCCESS,
  GET_ALL_POST_FAILURE,
  GET_USER_POST_REQUEST,
  GET_USER_POST_SUCCESS,
  GET_USER_POST_FAILURE,
  DEL_POST_REQUEST,
  DEL_POST_SUCCESS,
  DEL_POST_FAILURE,
} from './postTypes';

const initialState = {
  isFetching: false,
  posts: [],
  errorMessage: '',
  postDel: undefined,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_POST_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case NEW_POST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        errorMessage: '',
      };

    case NEW_POST_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.message,
      };

    case GET_ALL_POST_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case GET_ALL_POST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        errorMessage: '',
        posts: action.allPosts,
      };

    case GET_ALL_POST_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.message,
      };

    case GET_USER_POST_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case GET_USER_POST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        errorMessage: '',
        otherUserPosts: action.userPosts,
      };

    case GET_USER_POST_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.message,
      };

    case DEL_POST_REQUEST:
      return {
        ...state,
        isFetching: true,
        postDel: undefined,
      };

    case DEL_POST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        errorMessage: '',
        postDel: action.postDel,
      };

    case DEL_POST_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.message,
        postDel: undefined,
      };

    default:
      return state;
  }
};

export default postReducer;
