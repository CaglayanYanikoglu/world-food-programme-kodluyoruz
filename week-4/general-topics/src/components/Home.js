import React from 'react';
import ShowCount from './ShowCount';

const Home = (props) => {
  console.log(props);
  return (
    <>
      <h2>Home</h2>
      <p>Count in home: {props.data} </p>
      <ShowCount countValue={props.data} />
    </>
  );
};

export default Home;
