import axios from 'axios';

export const getProducts = (page) => {
  const offset = page * 5;
  return axios.get(`https://fakestoreapi.com/products?limit=20&offset=${offset}`);
};

export const getProductDetail = (id) => {
  return axios.get(`https://fakestoreapi.com/products/${id}`);
}