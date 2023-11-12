import './App.css';
import { Navbar, Home,Testimonial, About,Footer, Menulist } from './components';

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
