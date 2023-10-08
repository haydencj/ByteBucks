import React, { useState, useEffect } from 'react';
import AnimatedComponent from '../components/AnimatedComponent';
import SignInButton from '../components/SignInButton';

function Home() {
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
    return <strong style={{ fontSize: "70px", className:"glitch",color:"black" }}>{children}</strong>;
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
        <SuperStrong>Welcome to
          ByteBucks
        </SuperStrong>
      </div>


      <div className="content-item">
    <div className="text-field">
        <input type="text" id="username" name="username" placeholder="Username"/>
      </div>
      </div>
      <div className="content-item">
      <div className="text-field">
        <input type="password" id="password" name="password" placeholder="Password" />
      </div>
      </div>

      <div className="content-item">
      <SignInButton/>
      </div>

      <div className="signUp">
      <a href="http://localhost:5173/registration" target="_blank">
          <h2>Don't have an account?</h2>
        </a>
      </div>

     </div>

    </div>





  );
}
export default Home;