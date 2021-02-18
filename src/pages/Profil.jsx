import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { editProfil } from '../Redux';

const Profil = () => {
  const profilUser = useSelector((state) => state.profil.user);
  const dispatch = useDispatch();
  const [editForm, setEditForm] = useState(false);
  const { id, username: userName, email, description } = profilUser;

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

  return (
    <div>
      <h1>Profil</h1>
      <h2>{userName}</h2>
      <h2>{email}</h2>
      <button type="button" onClick={() => setEditForm(!editForm)}>
        {editForm ? 'Close' : 'Edit'}
      </button>
      {editForm && (
        <form onSubmit={(e) => handleSubmitEdit(e)}>
          <input type="text" name="username" defaultValue={userName} />
          <input type="text" name="description" defaultValue={description} />
          <button type="submit" className="btn-submit">
            Edit
          </button>
        </form>
      )}
    </div>
  );
};

export default Profil;
