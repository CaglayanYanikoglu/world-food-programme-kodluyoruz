import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Circles } from 'react-loader-spinner'


import { Wrapper, Input, ToggleButton } from './StyledComponents/ScHome';
import ShoppingList from './ShoppingList';


const Home = () => {
  // array destructuring
  const [data, setData] = useState([]);
  // const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState('');
  const [showShoppingList, setShowShoppingList] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const res = await axios.get('https://fakestoreapi.com/products');
    setData(res.data);
    setIsLoading(false);
    // setFilteredData(res.data);
  }
  
  const handleToggle = () => {
    setShowShoppingList(!showShoppingList);
  }

  useEffect(() => { // component did mount => []
    getData();
    /* return () => {
      // component will unmount
    } */
  }, []);

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
      <h1>Shopping List</h1>
      <Input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" />
      <ToggleButton className={`${(showShoppingList) ? 'active' : ''}`} onClick={handleToggle}>{(showShoppingList) ? 'Hide' : 'Show'}</ToggleButton>
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
    </Wrapper>
  );
};

export default Home;
