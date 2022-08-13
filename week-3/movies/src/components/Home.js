import React, { useState } from 'react';
import Listing from './Listing';

const Home = () => {
  // console.log('home is rendered');
  // const [count, setCount] = useState(0);

  return (
    <>
      <h1>Movies App</h1>
      {/* <p>Home</p>
      <button onClick={() => setCount(count + 1)}>Increase {count}</button> */}

      <Listing /* search={search} */ /> {/* Prop-Drilling */}
    </>
  );
};

export default Home;
