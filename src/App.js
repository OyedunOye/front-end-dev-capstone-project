import './App.css';
import { Navbar, Home,Testimonial, About,Footer, Menulist } from './components';
import {Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar/>
      <Home />
      <Menulist />
      <Testimonial />
      <About />
      <Footer />
    </div>
  );
}

export default App;
