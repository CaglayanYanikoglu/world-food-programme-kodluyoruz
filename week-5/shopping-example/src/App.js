import '../src/styles/main.scss'
import { Home, Products } from './pages';
import Header from './components/Header';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ErrorBoundary type="home"><Home /> </ErrorBoundary>} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
