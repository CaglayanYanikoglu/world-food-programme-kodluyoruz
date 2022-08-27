import './App.css';
import Home from './pages/Home';
import { ThemeProvider } from '../src/context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
