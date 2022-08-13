import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Circles } from 'react-loader-spinner'


import { Wrapper, Input, ToggleButton, LogoutButton, LoginButton } from './StyledComponents/ScHome';
import ShoppingList from './ShoppingList';


const Home = () => {
  // array destructuring
  const [data, setData] = useState([]);
  // const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState('');
  const [showShoppingList, setShowShoppingList] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({
    name: '',
    budget: 0,
    isAuth: false,
    age: 27,
    // favoriteTvShows: ['Game of Throes', 'The Office']
  });

  const getData = async () => {
    const res = await axios.get('https://fakestoreapi.com/products');
    setData(res.data);
    setIsLoading(false);
    // setFilteredData(res.data);
  }

  const handleToggle = () => {
    setShowShoppingList(!showShoppingList);
  };

  const login = () => {
    setUser({
      ...user,
      name: 'Caglyan',
      budget: 100,
      isAuth: true
    })
  };

  const logout = () => {
    setUser({
      ...user,
      isAuth: false
    })
  };

  const addProduct = () => {
    // https://upload.wikimedia.org/wikipedia/en/7/77/EricCartman.png
    // id, title, description, price, image
    const newProduct = {
      id: Math.floor(Math.random() * 100000),
      title: 'New Product',
      description: 'New Product Description',
      price: 300,
      image: 'https://upload.wikimedia.org/wikipedia/en/7/77/EricCartman.png'
    };
    setData([newProduct, ...data]);
  };

  useEffect(() => { // component did mount => []
    getData();
    /* return () => {
      // component will unmount
    } */
  }, []);

/*   useEffect(() => {
    console.log('user', user);
  }, [user]); // component did update */

  /*   useEffect(() => {
      console.log('new search', search);
      const filtered = data.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));
      setFilteredData(filtered);
    }, [search]) // dependency */

  const filteredData = data.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));
  /* const filteredData = [];

  data.forEach(item => {
    if (item.title.toLowerCase().includes(search.toLowerCase())) {
      filteredData.push(item);
    }
  }) */

  return (
    <Wrapper>
      {!user.isAuth ? <LoginButton onClick={login} >Login</LoginButton> : (
        <>
          <h1>Shopping List</h1>
          <p>Welcome {user.name}!</p>
          <p>Your Budget: {user.budget}</p>
          <LogoutButton onClick={logout}>Log out</LogoutButton>
          <Input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" />
          <ToggleButton className={`${(showShoppingList) ? 'active' : ''}`} onClick={handleToggle}>{(showShoppingList) ? 'Hide' : 'Show'}</ToggleButton>
          <ToggleButton onClick={addProduct}>Add product</ToggleButton>
          {isLoading && (
            <Circles
              height="80"
              width="80"
              radius="9"
              color='green'
              ariaLabel='three-dots-loading'
              wrapperStyle
              wrapperClass
            />
          )}
          {showShoppingList && <ShoppingList data={filteredData} />}
        </>
      )}
    </Wrapper>
  );
};

export default Home;
