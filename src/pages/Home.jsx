import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { getAllPost, newPost } from '../Redux';
import Post from '../Components/Post';

const Home = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const currentUser = useSelector((state) => state.auth.user);
  const posts = useSelector((state) => state.post.posts);
  const dispatch = useDispatch();
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
    <section className="section">
      <div className="section-top">
        <h1>Home</h1>
      </div>
      {isAuthenticated && (
        <form onSubmit={(e) => handleSubmitPost(e)} className="form-post">
          <textarea type="text" name="username" placeholder="How are you?" />
          <div>
            <button type="submit" className="btn-primary">
              Send
            </button>
          </div>
        </form>
      )}
      <div className="post-container">
        {posts && posts.map((post) => <Post post={post} key={post.id} />)}
      </div>
    </section>
  );
};

export default Home;
