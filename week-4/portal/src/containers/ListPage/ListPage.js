import React, { useState, useEffect, Suspense } from 'react';
import axios from 'axios';

import Modal from '../../components/ListPage/Modal';
import Loader from '../../components/Loader';
// import LazyLoadComponent from '../../components/ListPage/LazyLoadComponent';
import './listing.scss';


const LazyLoadComponent = React.lazy(() => import('../../components/ListPage/LazyLoadComponent'));

const ListPage = () => {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState('');

  const fetchUsers = async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      setData(res.data);
    } catch (error) {

    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleUserModal = () => {
    setIsModalOpen(true);
  }

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  const filteredData = data.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));

  const deleteUser = (id) => {
    const newData = data.filter(item => item.id !== id);
    setData(newData);
  };
  
  
  return (
    <div className="container">
      <header>
        <div>
          <h1>Users ({filteredData.length})</h1>
          <div className="header-container">
            <div className="input-container">
              <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px"><path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" /></svg>
              <input type="text" value={search} onChange={handleSearch} />
            </div>
            <button className="add-user-btn" onClick={handleUserModal}>
              Add User
            </button>
          </div>
        </div>
      </header>
      <main>
        <table className="user-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>-</th>
            </tr>
          </thead>
          <tbody>
            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} data={data} setData={setData} />
            {filteredData.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <button className="delete-btn" onClick={() => deleteUser(user.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {!filteredData.length && <p>Not found any user...</p>}
          </tbody>
        </table>
      </main>
      <Suspense fallback={Loader}>
        <LazyLoadComponent />
      </Suspense>
    </div>
  );
};

export default ListPage;
