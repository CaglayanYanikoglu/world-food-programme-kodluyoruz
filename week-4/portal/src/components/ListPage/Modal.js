import React, { useState } from 'react';
import { createPortal } from "react-dom";

const Modal = ({
  isModalOpen, setIsModalOpen, data, setData
}) => {
  const defaultUser = {
    name: '',
    username: '',
    email: '',
    phone: '',
    id: 232
  }

  const [newUser, setNewUser] = useState(defaultUser);
  if (!isModalOpen) {
    return null;
  }
  /*   return (
      <div className="modal-container">
        <div className="modal-header">
          <h1>Hello Modal</h1>
        </div>
        <button onClick={() => setIsModalOpen(false)}>Close modal</button>
      </div>
    ); */

  const setUser = (e) => {
    const fieldName = e.target.name;
    setNewUser({
      ...newUser,
      [fieldName]: e.target.value,
      id: new Date().getTime()
    })
  };

  const saveUser = () => {
    setData([...data, newUser]);
    setIsModalOpen(false);
    setNewUser(defaultUser)
  }

  return createPortal(
    <div className="modal-container">
      <div className="modal-header">
        <h1>Add User</h1>
      </div>
      <div className="modal-content">
        <form>
          <div className="field">
            <label>Name:</label>
            <input value={newUser.name} name="name" onChange={setUser} type="text" placeholder="Name" />
          </div>
          <div className="field">
            <label>Username:</label>
            <input value={newUser.username} name="username" onChange={setUser} type="text" placeholder="Username" />
          </div>
          <div className="field">
            <label>Email:</label>
            <input value={newUser.email} name="email" onChange={setUser} type="text" placeholder="Email" />
          </div>
          <div className="field">
            <label>Phone:</label>
            <input value={newUser.phone} name="phone" onChange={setUser} type="text" placeholder="Phone" />
          </div>
          <div className="action-btns">
            <button className="close-btn" onClick={() => setIsModalOpen(false)}>Close modal</button>
            <button onClick={saveUser} className="save-btn" type="button">Save</button>
          </div>
        </form>
      </div>
    </div>,
    document.getElementById("modal-container")
  );
};

export default Modal;
