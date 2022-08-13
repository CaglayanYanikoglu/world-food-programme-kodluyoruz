import './App.css';
//import Home from './components/Home';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const users = ['tugce', 'yasar', 'cagşlayan'];
  const [firstUser, secondUser] = users; // array destructing

  
  const renderCongratMessage = () => {
    if (count ===  5) {
      return <h1>Congrats its FIVE!</h1>
    } else {
      return null;
    }
  }

  return (
    <div className="App" style={{ margin: '50px' }}>
      <button onClick={() => setCount(count + 1)}>Increase Me {count}</button>
      <p>Count: {count}</p>
      {renderCongratMessage()}
    </div>
  );
}

export default App;
