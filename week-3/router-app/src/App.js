import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './styles/main.scss';
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
import HeaderMenu from './components/HeaderMenu';
import Products from './pages/Products';
import ProductDetail from './pages/Products/Details';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <HeaderMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
        />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
