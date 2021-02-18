import {
  NEW_POST_REQUEST,
  NEW_POST_SUCCESS,
  NEW_POST_FAILURE,
  GET_ALL_POST_REQUEST,
  GET_ALL_POST_SUCCESS,
  GET_ALL_POST_FAILURE,
} from './postTypes';

export const requestNewPost = () => ({
  type: NEW_POST_REQUEST,
  isFetching: true,
});

export const receiveNewPost = (response) => ({
  type: NEW_POST_SUCCESS,
  isFetching: false,
  response,
});

export const newPostError = (message) => ({
  type: NEW_POST_FAILURE,
  isFetching: false,
  message,
});

export const requestGetAllPost = () => ({
  type: GET_ALL_POST_REQUEST,
  isFetching: true,
});

export const receiveGetAllPost = (response) => ({
  type: GET_ALL_POST_SUCCESS,
  isFetching: false,
  allPosts: response,
});

export const getAllPostError = (message) => ({
  type: GET_ALL_POST_FAILURE,
  isFetching: false,
  message,
});
