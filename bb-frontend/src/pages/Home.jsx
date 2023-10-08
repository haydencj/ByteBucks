import React, { useState, useEffect, useRef } from 'react';
import AnimatedComponent from '../components/AnimatedComponent';
import SignInButton from '../components/SignInButton';
function Home() {

    const videoRef = useRef(null);

    useEffect(() => {
        // Auto-play the video when the component mounts
        videoRef.current.play();
    }, []);


    const SuperStrong = ({ children }) => {
        return <strong style={{ fontSize: "70px", className: "glitch", color: "black" }}>{children}</strong>;
    };

    return (



        <div className="app-container">


            <video className="video-element" ref={videoRef} width="640" height="750" loop muted="muted" >
                <source src="myVideo.webm" type="video/webm" />
                Your browser does not support the video tag.
            </video>

            <div className="content">

                <div className="content-item">
                    <SuperStrong>Welcome to
                        ByteBucks
                    </SuperStrong>
                </div>


                <div className="content-item">
                    <div className="text-field">
                        <input type="text" id="username" name="username" placeholder="Email" />
                    </div>
                </div>
                <div className="content-item">
                    <div className="text-field">
                        <input type="password" id="password" name="password" placeholder="Password" />
                    </div>
                </div>

                <div className="content-item">
                    <SignInButton />
                </div>

                <div className="signUp">
                    <a href="http://localhost:5173/registration">
                        <h2>Don't have an account?</h2>
                    </a>
                </div>
            </div>

        </div>





    );
}
export default Home;