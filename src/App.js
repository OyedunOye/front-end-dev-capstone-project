import './App.css';
import { Navbar, Footer } from './components';
import Main from './components/main/Main';
import {BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Main />
        <Footer />
    </div>
    </Router>
  );
}

export default App;
