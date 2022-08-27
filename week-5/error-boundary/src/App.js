import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary isHome={true}>
      <div className="App">
        <h1>Error boundary</h1>
        <Home />
      </div>
    </ErrorBoundary>
  );
}

export default App;
