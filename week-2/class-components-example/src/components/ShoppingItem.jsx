import React, { useEffect } from 'react';
import { Card } from './StyledComponents/ScShopping';

/* const ShoppingItem = (props) => {
  const { item } = props; */
const ShoppingItem = ({ item }) => {
  /* useEffect(()=> {
    const timeInterval = setInterval(() => {
      console.log('item');
    }, 1000);

    return () => { // componentWillUnmount, before execute useEffect
      console.log('item will be unmount');
      clearInterval(timeInterval);
    }
  }, []); */

  return (
    <Card>
      <img src={item.image} alt={item.title} />
      <div>
        <h2>{item.title}<span>Test</span></h2>
        <p className="description">{item.description}</p>
        <p className="price">Price: {item.price}$</p>
      </div>
    </Card>
  );
};

export default ShoppingItem;