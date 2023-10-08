import React from 'react';
import { Link,Router } from 'react-router-dom';

function SignInButton() {
    const handleLoginClick = () => {
        window.location.href = "http://localhost:5173/pages/Wallet"; // Redirect to Flask login route
    };
  return (
    <a href="#"style={{}} onClick={handleLoginClick}>
        <button>
            Sign In</button></a>

    return (
        <a href="#"style={{backgroundColor: "green"}} onClick={handleLoginClick}>
            <button>Sign In</button>
        </a>
    );
}

export default SignInButton;
