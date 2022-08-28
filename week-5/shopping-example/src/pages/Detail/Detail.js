import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { getProductDetail } from '../../services/api';
import CartContext from '../../context/CartContext';

const Detail = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState({});

  const {data, setData} = useContext(CartContext);

  const fetchProduct = async () => {
    try {
      const res = await getProductDetail(productId);
      setProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  const addToCart = () => {
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

  return (
    <div className="detail-page">
      <div className="detail-image-wrapper">
        <img src={product.image} />
      </div>
      <div className="detail-info">
        <p className="detail-title">{product.title}</p>
        <p className="detail-category">{product.category}</p>
        <p className="detail-description">{product.description}</p>
        <p className="detail-price">$ {product.price}</p>
        <button className="detail-add-btn" onClick={addToCart}>Sepete Ekle</button>
      </div>
    </div>
  );
};

export default Detail;
