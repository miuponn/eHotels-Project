import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import {Routes, Route} from "react-router-dom";
import Hotels from "./pages/Hotels.js";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";
function App(){
  return (
    <div className = 'App'>
      <Navbar />
      <Routes>
        <Route path="/home" />
        <Route path="/hotels" element= {<Hotels />} />
        <Route path="/profile"/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signUp" element={< Signup />}/>
      </Routes>
      <h1>Make yourself at home.</h1>
    </div>
  );
}

/* 
<Route path="/Discover" element={<Discover />}/>
<Route path="/Login" element={<Login />}/>
<Route path="/signup" element={<Signup />}/>
*/

export default App;