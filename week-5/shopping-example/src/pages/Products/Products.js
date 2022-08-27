import React, { useState, useEffect } from 'react';
import { getProducts } from '../../services/api';
import withLoading from '../../hocs/withLoading';

const Products = (props) => {
  console.log('props', props);
  const [products, setProducts] = useState([]);
  
  const fetchProducts = async() => {
    try {
      const res = await getProducts();
      console.log(res);
      if (res.status === 200) {
        setProducts(res.data);
      }
      props.setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <h2>Listing</h2>
      <div className="product_container">
        {products.map(product => (
          <div className="product_item">
            <img className="product_image" src={product.image}/>
            <div className="product_info">
              <p>{product.description}</p>
              <p>$ {product.price}</p>
            </div>
          </div>
        ))}

      </div>
    </>
  );
};

export default withLoading(Products);
