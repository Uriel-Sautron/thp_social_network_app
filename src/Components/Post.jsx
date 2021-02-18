import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Post = ({ userName, text, postUserId }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="post">
      <h2>
        {isAuthenticated ? (
          <Link to={`/user/${postUserId}`}>{userName}</Link>
        ) : (
          <Link to="/login">John Doe</Link>
        )}
      </h2>
      <p>{text}</p>
    </div>
  );
};

export default Post;
