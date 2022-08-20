import React, {useState} from 'react';

import './App.css';
import Home from './components/Home';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>General Topics</h1>
{/*       <button onClick={() => setCount(count + 1)}>Increase me</button>
      <p>Count: {count}</p>
      <Home data={count} /> */}
    </div>
  );
}

export default App;
