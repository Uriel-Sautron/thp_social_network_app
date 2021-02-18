import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import { otherUserProfil } from '../Redux';

const OtherProfil = () => {
  const { userSlug } = useParams();
  const dispatch = useDispatch();
  const otherUser = useSelector((state) => state.profil.otherUser);
  const token = Cookies.get('id_token');
  const { username: userName, description } = otherUser;

  useEffect(() => {
    dispatch(otherUserProfil(token, userSlug));
  }, [dispatch, token, userSlug]);

  return (
    <div>
      <h2>{userName}</h2>
      <p>{description}</p>
    </div>
  );
};

export default OtherProfil;
