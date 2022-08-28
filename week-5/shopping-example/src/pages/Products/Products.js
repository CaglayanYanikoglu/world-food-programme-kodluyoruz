import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";

import { getProducts } from '../../services/api';
import withLoading from '../../hocs/withLoading';
import CartContext from '../../context/CartContext';

const Products = (props) => {
  const [products, setProducts] = useState([]);
  const { data, setData } = useContext(CartContext);

  const navigate = useNavigate();
  /* https://reactrouter.com/en/main/hooks/use-navigate */

  const fetchProducts = async (page, withPagination) => {
    try {
      if (withPagination) {
        setProducts([]);
      }
      const res = await getProducts(page);
      if (res.status === 200) {
        setProducts(res.data);
      }
      props.setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts(0);
  }, []);

  const goDetailPage = (product) => {
    navigate(`./${product.id}`, { replace: true });
  }

  const addToCart = (product) => {
    const newData = [
      ...data,
      product
    ]
    setData(newData);
    // localStorage.setItem('name', 'Caglayan');
    const localValue = localStorage.getItem('cart');
    if (localValue) {
      localStorage.setItem('cart', JSON.stringify(newData));
    } else {
      localStorage.setItem('cart', JSON.stringify(newData));
      // localStorage.setItem()
    }
    // add to localstorage;
  }

  const fetchPaginationData = (page) => {
    fetchProducts(page, true);
  }

  return (
    <>
      <div className="product_container">
        {products.map(product => (
          <div className="product_item" key={product.id}>
            <img className="product_image" src={product.image} />
            <div className="product_info">
              <p className="description">{product.description}</p>
              <p className='detail-price'>$ {product.price}</p>
              <div className="detail-page-btn">
                <button type="button" id="test-btn" onClick={() => goDetailPage(product)}>See Details</button>
                <button className="detail-add-btn" onClick={() => addToCart(product)}>Sepete Ekle</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {[1, 2, 3, 4, 5, 6].map(item => (
          <button onClick={() => fetchPaginationData(item)}>{item}</button>
        ))}
      </div>
    </>
  );
};

export default withLoading(Products);
