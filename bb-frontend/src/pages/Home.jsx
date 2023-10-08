
import React, { useState, useEffect } from 'react';
import AnimatedComponent from '../components/AnimatedComponent';
import TypeIt from "typeit-react";
import { BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom';
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
        return <strong style={{ fontSize: "70px", className:"glitch" }}>{children}</strong>;
    };

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
}
export default Home;
