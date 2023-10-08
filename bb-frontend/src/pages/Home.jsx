
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

<<<<<<< HEAD
    const SuperStrong = ({ children }) => {
        return <strong style={{ fontSize: "70px", className:"glitch" }}>{children}</strong>;
    };
=======
  const SuperStrong = ({ children }) => {
    return <strong style={{ fontSize: "70px", className:"glitch",color:"black" }}>{children}</strong>;
  };
>>>>>>> origin/experimental

    return (
        <div className="app-container">
            
            {/* Logo container */}
            <AnimatedComponent>
                <div className="logo">
                    <a href="https://devpost.com/software/bytebucks" target="_blank">
                    <img src={'/BB_Logo.png'} className="logo" alt="ByteBucks Logo" />
                    </a>
                </div>
            </AnimatedComponent>
            
            {/* Welcome to ByteBucks and login fields */}
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

<<<<<<< HEAD
                    <div className="content-item">
                        <div className="text-field">
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" name="password" />
                        </div>
                    </div>

                    <div className="content-item">
                        <SignInButton/>
                    </div>
                </AnimatedComponent>
            </div>

        </div>
    );
=======
    <AnimatedComponent>
    <div className="logo">
        <a href="https://devpost.com/software/bytebucks" target="_blank">
          <img src={'/BB_Logo.png'} className="logo" alt="ByteBucks Logo" />
        </a>
      </div>
      </AnimatedComponent>
      
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
      <a href="http://localhost:5177/pages/Wallet" target="_blank">
          <h2>Don't have an account?</h2>
        </a>
      </div>

     </div>
     
    </div>





  );
>>>>>>> origin/experimental
}
export default Home;
