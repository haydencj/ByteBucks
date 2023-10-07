import React, { useState, useEffect } from 'react';
import './App.css'
import AnimatedComponent from './components/AnimatedComponent';
import TypeIt from "typeit-react";


function App() {
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    // Use setTimeout to delay showing the title
    const timer = setTimeout(() => {
      setShowTitle(true);
    }, 1500);

    // Clear the timer when the component unmounts
    return () => {
      clearTimeout(timer);
    };
  }, []); // Empty dependency array to run the effect only once

  const SuperStrong = ({ children }) => {
    return <strong style={{ fontSize: "70px", className:"glitch" }}>{children}</strong>;
  };

  return (
   
    <div className="app-container">


<div className="logo">
        <a href="https://devpost.com/software/bytebucks" target="_blank">
          <img src={'/BB_Logo.png'} className="logo" alt="ByteBucks Logo" />
        </a>
      </div>
      
      
      <div className="content">

        <div className="content-item">
      <TypeIt>
        <SuperStrong>Welcome to
          ByteBucks.
        </SuperStrong>
      </TypeIt>
      </div>

      
        
    <AnimatedComponent>
      <div className="content-item">
    <div className="text-field">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
      </div>
      </div>
      <div className="content-item">
      <div className="text-field">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
      </div>
      </div>
      <div className="content-item">
      <button>
       Sign in
      </button>
      </div>
      </AnimatedComponent>
     {/* <Login/> */}

     </div>
     
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

