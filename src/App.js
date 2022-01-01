import './App.css';
import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import Cars from './pages/cars'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };
  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/cars" element={<Cars />} exact />
      </Routes>
    </Router>
  );
}

export default App;
