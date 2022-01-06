import React, {useRef} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import VanillaTilt from 'vanilla-tilt';

window.addEventListener("load",()=>{
  if(window.location.hostname.match('000webhostapp')) for(var i = 0; i < 2;i++) document.body.lastElementChild.remove() // Remove WaterMarks
  let loaders = document.getElementsByClassName("loadScreen");
  [...loaders].forEach(element => {
    element.remove();
  });
  document.getElementById("root").classList.remove("hidden");
  const cards = document.querySelectorAll(".car-card");
  VanillaTilt.init(cards,{
    max: 25,
		speed: 400,
    scale: 1.2
  });
});
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
