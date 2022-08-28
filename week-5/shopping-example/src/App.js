import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { Home, Products, Cart, Detail } from './pages';
import Header from './components/Header';
import ErrorBoundary from './components/ErrorBoundary';
import '../src/styles/main.scss'
import { CartProvider } from './context/CartContext';


function App() {
  return (
    <CartProvider>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<ErrorBoundary type="home"><Home /> </ErrorBoundary>} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<Detail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;
