import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

import ChildrenApp from './Children';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Listing = () => {
  // console.log('listing is rendered');
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = e => {
    setSearch(e.target.value);
  }

  const getData = async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const showDetails = async (id) => {
    setIsLoading(true);
    setIsOpen(true);
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    setSelectedMovie(res.data);
    setIsLoading(false);
  }

  useEffect(() => {
/*     const users = ['caglayan', 'tugce', 'ugur', 'yunus'];
    console.log(users.join(' | '));
    const commaUsers = 'caglayan tugce ugur yunus'; 
    console.log(commaUsers.split(' ')); */
/*     let commaUsers = '';
    users.forEach(user => {
      commaUsers += user + ', ';
    })
    console.log('commaUsers', commaUsers); */
    getData();
  }, []);

  return (
    <>
      <div style={{ marginTop: '12px' }}>
        <input type="text" value={search} onChange={handleSearch} />
      </div>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <p style={{ cursor: 'pointer', marginTop: '12px' }} onClick={() => showDetails(item.id)}>{item.title}</p>
          </li>
        ))}
      </ul>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <>
        {isLoading ? <p>Loading...</p>: (
          <li>
            <h2>{selectedMovie.title}</h2>
            <p>{selectedMovie.body}</p>
          </li>
        )}
        </>
      </Modal>
      <ChildrenApp name="Caglayan">
        <p>This is p</p>
      </ChildrenApp>
    </>
  );
};

export default Listing;
// export default React.memo(Listing); // memorize // this is not useMemo
