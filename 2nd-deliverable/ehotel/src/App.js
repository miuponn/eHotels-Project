import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import {Routes, Route} from "react-router-dom";
import Hotels from "./pages/Hotels.js";


function App(){
  return (
    <div className = 'App'>
      <Navbar />
      <Routes>
        <Route path="/home" />
        <Route path="/hotels" element= {<Hotels />} />
      </Routes>
      <h1>Make yourself at home.</h1>
    </div>
  );
}

export default App;