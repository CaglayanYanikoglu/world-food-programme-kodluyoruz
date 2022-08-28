import React, {useContext} from 'react';
import {
  Link
} from "react-router-dom";

import CartContext from '../../context/CartContext';
import './header.scss';

const Header = () => {
  const context = useContext(CartContext);
  return (
    <nav className="header">
      <div className="logo-wrapper">
        <svg className="pre-logo-svg" height="60px" width="60px" fill="#111" viewBox="0 0 69 32"><path d="M68.56 4L18.4 25.36Q12.16 28 7.92 28q-4.8 0-6.96-3.36-1.36-2.16-.8-5.48t2.96-7.08q2-3.04 6.56-8-1.6 2.56-2.24 5.28-1.2 5.12 2.16 7.52Q11.2 18 14 18q2.24 0 5.04-.72z"></path></svg>
      </div>
      <div className="header-menu">
        <Link to="/">
          Home
        </Link>
        <Link to="/products">
          Products
        </Link>
      </div>
      <div className="basket-wrapper">
        <Link to="/cart">
          <img src="data:image/png;base64,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"
            width="30" height="30" />
        </Link>
        <span className="cart-number">{context?.data?.length}</span>
      </div>
    </nav>
  );
};

export default Header;
