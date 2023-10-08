import React, { useState, useEffect, useRef } from 'react';
import LoginButton from '../components/LoginButton';

function Home() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
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
                    <SuperStrong>Welcome to ByteBucks</SuperStrong>
                </div>


                <div className="content-item">
                    <div className="text-field">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                        />
                    </div>
                </div>

                <div className="content-item">
                    <div className="text-field">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                        />
                    </div>
                </div>

                <div className="content-item">
                    <LoginButton
                        email={email}
                        password={password}
                        setError={setError}
                    />
                    {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error in red text */}
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