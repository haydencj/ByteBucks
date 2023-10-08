import React from 'react';
import { Link,Router } from 'react-router-dom';

function SignInButton() {
    const handleLoginClick = () => {
        window.location.href = "http://localhost:5175/pages/Wallet"; // Redirect to Flask login route
    };
  return (
    <a href="#"style={{backgroundColor: "green"}} onClick={handleLoginClick}>
        <button>
            Sign In</button></a>

  );
}

export default SignInButton;