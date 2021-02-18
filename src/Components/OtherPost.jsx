import React from 'react';
import moment from 'moment';

const OtherPost = ({ create, text }) => (
  <div className="other-post">
    <h2>{moment(create).startOf().fromNow()}</h2>
    <p>{text}</p>
  </div>
);

export default OtherPost;
