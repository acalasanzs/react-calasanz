import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

window.addEventListener("load",()=>{
  if(window.location.hostname.match('000webhostapp')) for(var i = 0; i < 2;i++) document.body.lastElementChild.remove() // Remove WaterMarks
  let loaders = document.getElementsByClassName("loaderScreen");
  [...loaders].forEach(element => {
    element.remove();
  });
  document.getElementById("root").classList.remove("hidden");
});
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
