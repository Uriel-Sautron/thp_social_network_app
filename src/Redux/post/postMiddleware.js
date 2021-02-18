import {
  requestNewPost,
  receiveNewPost,
  newPostError,
  requestGetAllPost,
  receiveGetAllPost,
  getAllPostError,
  requestGetUserPost,
  receiveGetUserPost,
  getUserPostError,
  requestDelPost,
  receiveDelPost,
  delPostError,
} from './postActions';

export const getAllPost = () => (dispatch) => {
  const config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(),
  };

  dispatch(requestGetAllPost());
  fetch(
    'https://thp-strapi-social-network.herokuapp.com/posts?_limit=20&_sort=created_at:desc',
    config
  )
    .then((response) => response.json())
    .then((response) => {
      if (response.statusCode) {
        dispatch(getAllPostError(response.message));
      } else {
        dispatch(receiveGetAllPost(response));
      }
    });
};

export const newPost = (userData) => (dispatch) => {
  const { token, id, post } = userData;

  const data = {
    user: id,
    text: post,
  };

  const config = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  dispatch(requestNewPost());
  fetch('https://thp-strapi-social-network.herokuapp.com/posts', config)
    .then((response) => response.json())
    .then((response) => {
      if (response.statusCode) {
        dispatch(newPostError(response.message));
      } else {
        dispatch(receiveNewPost(response));
        dispatch(getAllPost());
      }
    });
};

export const getUserPost = (token, id) => (dispatch) => {
  const config = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(),
  };

  dispatch(requestGetUserPost());
  fetch(
    `https://thp-strapi-social-network.herokuapp.com/posts?user.id=${id}`,
    config
  )
    .then((response) => response.json())
    .then((response) => {
      if (response.statusCode) {
        dispatch(getUserPostError(response.message));
      } else {
        dispatch(receiveGetUserPost(response));
      }
    });
};

export const delPost = (token, postId) => (dispatch) => {
  const config = {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(),
  };

  dispatch(requestDelPost());
  fetch(
    `https://thp-strapi-social-network.herokuapp.com/posts/${postId}`,
    config
  )
    .then((response) => response.json())
    .then((response) => {
      if (response.statusCode) {
        dispatch(delPostError(response.message));
      } else {
        dispatch(receiveDelPost(response));
        dispatch(getUserPost(token, response.user.id));
      }
    });
};
