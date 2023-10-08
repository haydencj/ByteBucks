import React from 'react';
import axios from 'axios';  // Don't forget to import axios
import { useNavigate } from 'react-router-dom';


function LoginButton({ email, password, setError }) {
    const navigate = useNavigate();
    const API_URL = 'http://localhost:3003/api/auth/';

    const handleLogin = async () => {
        if (!email || !password) {
            setError('Please fill all fields');
            return;
        }

        try {
            const response = await axios.post(API_URL + 'login', {
                email,
                password,
            });

            if (response && response.data.token) {
                localStorage.setItem('token', response.data.token);
                console.log('Login successful');
                navigate('/wallet'); // Redirect to wallet page
            } else {
                setError('Invalid email or password');
            }

        } catch (error) {
            setError('Invalid email or password');
        }
    };

    return (
        <button onClick={handleLogin}>
            Login
        </button>
    );
}

export default LoginButton;
