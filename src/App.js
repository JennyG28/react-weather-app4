import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
     
     <Weather defaultCity = "Denver"/> 
      <footer>
        This project was coded by Jenny Gomez and is{" "}
        <a href="https://github.com/JennyG28/react-weather-app4"
    target="_blank" rel="noopener noreferrer">
open-sourced on GitHub </a> and{" "}
<a href="https://boring-blackwell-a8157f.netlify.app"
    target="_blank" rel="noopener noreferrer"> hosted on Netlify 
    </a>
    </footer>
    </div>
    </div>
  );
}


