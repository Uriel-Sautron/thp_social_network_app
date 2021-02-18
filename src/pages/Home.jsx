import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { getAllPost, newPost } from '../Redux';
import Post from '../Components/Post';

const Home = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const currentUser = useSelector((state) => state.auth.user);
  const posts = useSelector((state) => state.post.posts);
  const dispatch = useDispatch();
  console.log('posts:', posts);
  useEffect(() => {
    dispatch(getAllPost());
  }, [dispatch]);

  const handleSubmitPost = (e) => {
    e.preventDefault();
    const user = {
      id: currentUser.id,
      post: e.target[0].value,
      token: Cookies.get('id_token'),
    };
    e.target[0].value = '';
    dispatch(newPost(user));
  };

  return (
    <section className="section-home">
      <h1>Home</h1>
      <h2>
        Welcome on THP Social Network. This website is a training to Redux and
        React. We use auth and routing to create a small social media website.
      </h2>
      {isAuthenticated && (
        <form onSubmit={(e) => handleSubmitPost(e)}>
          <input type="text" name="username" />
          <button type="submit" className="btn-submit">
            Send
          </button>
        </form>
      )}
      <div className="post-container">
        {posts &&
          posts.map((post) => (
            <Post
              userName={post.user.username}
              text={post.text}
              key={post.id}
            />
          ))}
      </div>
    </section>
  );
};

export default Home;
