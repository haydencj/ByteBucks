import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import OpenWalletButton from './components/OpenWalletbutton'
import React, { useState, useEffect } from 'react';
import './App.css'
import AnimatedComponent from './components/AnimatedComponent';

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



  return (
    <div className="App">
      <h1
        className={`title ${showTitle ? 'show' : ''}`}
        style={{
          transition: 'opacity 1s ease, transform 1s ease',
          opacity: showTitle ? 1 : 0,
          transform: showTitle ? 'scale(1)' : 'scale(0.5)',
        }}
      >
        Welcome to
      </h1>
      <h1
        className={`title ${showTitle ? 'show' : ''}`}
        style={{
          transition: 'opacity 3s ease, transform 1s ease',
          opacity: showTitle ? 1 : 0,
          transform: showTitle ? 'scale(1)' : 'scale(0.5)',
        }}
      >
        ByteBuck!
      </h1>


      <AnimatedComponent>
      <OpenWalletButton/>


      </AnimatedComponent>
    </div>
  );
}

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

