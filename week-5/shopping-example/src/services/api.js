import axios from 'axios';

export const getProducts = () => {
  return axios.get('https://fakestoreapi.com/products');
};
