import './App.css';
import { useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import Cars from './pages/cars'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  /* const getWidth = () => window.innerHeight
|| document.documentElement.clientWidth || document.body.clientWidth;

function useCurrentWidth() {
  // save current window width in the state object
  let [width, setWidth] = useState(getWidth());

  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  useEffect(() => {
    // timeoutId for debounce mechanism
    let timeoutId = null;
    const resizeListener = () => {
      // prevent execution of previous setTimeout
      clearTimeout(timeoutId);
      // change width from the state object after 150 milliseconds
      timeoutId = setTimeout(() => setWidth(getWidth()), 150);
    };
    // set resize listener
    window.addEventListener('resize', resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener('resize', resizeListener);
    }
  }, [])

  return width;
}
  let width = useCurrentWidth(); */


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
      <Navbar toggle={toggle}/>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/cars" element={<Cars />} exact />
      </Routes>
    </Router>
  );
}

export default App;
