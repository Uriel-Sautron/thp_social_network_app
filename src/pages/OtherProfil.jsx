import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import OtherPost from '../Components/OtherPost';
import { otherUserProfil, getUserPost } from '../Redux';

const OtherProfil = () => {
  const { userSlug } = useParams();
  const dispatch = useDispatch();
  const otherUser = useSelector((state) => state.profil.otherUser);
  const otherUserPosts = useSelector((state) => state.post.otherUserPosts);
  const token = Cookies.get('id_token');
  const { username: userName, description, email } = otherUser;

  useEffect(() => {
    dispatch(otherUserProfil(token, userSlug));
    dispatch(getUserPost(token, userSlug));
  }, [dispatch, token, userSlug]);

  return (
    <section className="section">
      <div className="section-top">
        <h1>Profil</h1>
      </div>
      <div className="main-profil">
        <div className="main-profil-top">
          <h2>{userName}</h2>
          <h3>{email}</h3>
        </div>
        <p>{description || 'Not description...'}</p>
        {otherUserPosts &&
          otherUserPosts.map((post) => (
            <OtherPost
              create={post.created_at}
              text={post.text}
              key={post.id}
            />
          ))}
      </div>
    </section>
  );
};

export default OtherProfil;
