import './App.css';
import { useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import Cars from './pages/cars'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Shop from './pages/shop';
import Aboutus from './pages/aboutus';
import About from './pages/about';

function App() {

  const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
        if (isOpen) {
          document.getElementById("nav-bar").classList.remove("menu");
          document.getElementById("hamburger-toggle").classList.remove("active");
        }else{
          document.getElementById("nav-bar").classList.add("menu");
          document.getElementById("hamburger-toggle").classList.add("active");
        }
    
    };
  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} toggle={toggle}/>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/cars" element={<Cars />} exact />
        <Route path="/shop" element={<Shop />} exact />
        <Route path="/aboutus" element={<Aboutus />} exact />
        <Route path="/about" element={<About />} exact />
      </Routes>
    </Router>
  );
}

export default App;
