import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import moment from 'moment';
import iconLike from '../assets/images/heart.svg';

const Post = ({ post }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // eslint-disable-next-line camelcase
  const { user, text, like, created_at } = post;
  const { username: userName, id: userId } = user;

  return (
    <div className="post">
      <h2>
        {isAuthenticated ? (
          <Link to={`/user/${userId}`}>{userName}</Link>
        ) : (
          <Link to="/login">John Doe</Link>
        )}
      </h2>
      <span>{moment(created_at).startOf().fromNow()}</span>
      <p>{text}</p>
      <div className="like">
        <p>{like}</p>
        <img src={iconLike} alt="Like" />
      </div>
    </div>
  );
};

export default Post;
