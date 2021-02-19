import React from 'react';
import moment from 'moment';
import iconLike from '../assets/images/heart.svg';

const OtherPost = ({ create, text, like }) => (
  <div className="other-post">
    <h2>{moment(create).startOf().fromNow()}</h2>
    <p>{text}</p>
    <div className="like">
      <p>{like}</p>
      <img src={iconLike} alt="Like" />
    </div>
  </div>
);

export default OtherPost;
