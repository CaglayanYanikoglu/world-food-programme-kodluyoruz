import React, { Suspense } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './styles/main.scss';

// import { ListPage, Home } from './containers';
// import ListPage from './containers/ListPage';
import Home from './containers/Home';

const ListPage = React.lazy(() => import('./containers/ListPage'));


function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <nav className="nav-menu">
            <Link to="/">
              Home
            </Link>
            <Link to="/users">
              Users
            </Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<ListPage />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
