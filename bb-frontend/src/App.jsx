import React, { useState, useEffect } from 'react';
import './App.css'
import AnimatedComponent from './components/AnimatedComponent';
import TypeIt from "typeit-react";
import { BrowserRouter, Router, Routes,Route, Link } from 'react-router-dom';
import SignInButton from './components/SignInButton';
import Home from './pages/Home';
import Wallet from './pages/Wallet';

function App() {
  return(
    <div>
    <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path='/pages/Wallet' element={<Wallet />} />
         
        </Routes>
    </BrowserRouter>
</div>
  );
}


{/* <div
        className={`title ${showTitle ? 'show' : ''}`}
        style={{
          transition: 'opacity 1s ease, transform 1s ease',
          opacity: showTitle ? 1 : 0,
          transform: showTitle ? 'scale(1)' : 'scale(0.5)',
        }}
      >
        <h1 className="glitch"
        data-text="Welcome to">Welcome to</h1>
      </div>

      <div
        className={`title ${showTitle ? 'show' : ''}`}
        style={{
          transition: 'opacity 3s ease, transform 1s ease',
          opacity: showTitle ? 1 : 0,
          transform: showTitle ? 'scale(1)' : 'scale(0.5)',
        }}
      >
        <h1>
        <span className="glitch" data-text="ByteBuck!">ByteBuck!</span>
        </h1>
        
      </div> */}
      /* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */

export default App;

