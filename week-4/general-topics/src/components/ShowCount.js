import React from 'react';

const ShowCount = (props) => {
  console.log(props);
  return (
    <>
      <h2>ShowCount</h2>
      <p>Count in ShowCount: {props.countValue} </p>
    </>
  );
};

export default ShowCount;
