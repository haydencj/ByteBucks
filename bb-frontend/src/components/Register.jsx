import React, { useState } from 'react';
import authService from '../../services/auth.service';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    
    const onHandleRegistrationClick = async () => {
        const { email, password, confirmPassword } = formData;
        if (password !== confirmPassword) {
            alert("Passwords do not match. Please re-enter your password.");
            return; // Prevent registration if passwords don't match
        }
        try {
            const response = await authService.register(formData.email, formData.password);
            console.log(response);  // handle response as needed
            navigate('/'); // Redirect to wallet page
        } catch (error) {
            console.error('Registration failed', error);
        }
    };

    return (
        <>
        <div>
            <h1 className="Register">Register a ByteBucks Account</h1>
        </div>
        <div className="registerCard">
            <input type="email" name="email" onChange={handleInputChange} placeholder="Email" />
            <input type="password" name="password" onChange={handleInputChange} placeholder="Password" />
            <input type="password" name="confirmPassword" onChange={handleInputChange} placeholder="Confirm Password" />
            <button className="button2" onClick={onHandleRegistrationClick}>Register</button>
        </div>
        </>
    );
};

export default Register;
