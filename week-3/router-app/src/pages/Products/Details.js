import React from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
  const params = useParams();
  console.log(params);
  const { productId } = params;
  console.log(productId);
  return (
    <p>Detail product id: {productId}</p>
  );
};

export default Details;
