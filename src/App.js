import Header from './components/Header';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    //BEM naming convention
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

export default App;
