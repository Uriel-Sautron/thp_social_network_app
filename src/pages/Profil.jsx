import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { editProfil, getUserPost, delPost } from '../Redux';
import OtherPost from '../Components/OtherPost';

const Profil = () => {
  const profilUser = useSelector((state) => state.profil.user);
  const userPosts = useSelector((state) => state.post.otherUserPosts);
  const dispatch = useDispatch();
  const [editForm, setEditForm] = useState(false);
  const { id, username: userName, email, description } = profilUser;
  const token = Cookies.get('id_token');

  useEffect(() => {
    dispatch(getUserPost(token, id));
  }, [dispatch, id, token]);

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    const user = {
      id,
      name: e.target[0].value,
      description: e.target[1].value,
      token: Cookies.get('id_token'),
    };
    dispatch(editProfil(user));
    setEditForm(!editForm);
  };

  const handleDelPost = (e, postId) => {
    e.preventDefault();
    dispatch(delPost(token, postId));
    console.log('test del');
  };

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
        <p>{description || 'Not description'}</p>
        <button
          type="button"
          className={
            editForm ? 'btn-danger profil-btn' : 'btn-primary profil-btn'
          }
          onClick={() => setEditForm(!editForm)}
        >
          {editForm ? 'Close' : 'Edit profil...'}
        </button>
        {editForm && (
          <div className="main-edit">
            <form onSubmit={(e) => handleSubmitEdit(e)}>
              <input type="text" name="username" defaultValue={userName} />
              <input
                type="text"
                name="description"
                defaultValue={description}
              />
              <button type="submit" className="btn-primary">
                Edit
              </button>
            </form>
          </div>
        )}
        {userPosts &&
          userPosts.map((post) => (
            <>
              <OtherPost
                create={post.created_at}
                text={post.text}
                key={post.id}
              />
              <button
                type="button"
                className="btn-danger-small"
                onClick={(e) => handleDelPost(e, post.id)}
              >
                Delete
              </button>
            </>
          ))}
      </div>
    </section>
  );
};

export default Profil;
