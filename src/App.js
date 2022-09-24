import Router from './route/Router'
import './App.css';
import HomePage from './pages/HomePage';
import ToastError from './components/ToastError';

function App() {
  return (
    <div className="App">
      <div>
        <ToastError />
        <Router />
      </div>
      
    </div>
  );
}

export default App;
