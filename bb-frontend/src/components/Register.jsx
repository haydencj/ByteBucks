import React, { useState } from 'react';
import authService from '../../services/auth.service';

const Register = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const onHandleRegistrationClick = async () => {
        try {
            const response = await authService.register(formData.email, formData.password);
            console.log(response);  // handle response as needed
        } catch (error) {
            console.error('Registration failed', error);
        }
    };

    return (
        <div>
            <input type="email" name="email" onChange={handleInputChange} placeholder="Email" />
            <input type="password" name="password" onChange={handleInputChange} placeholder="Password" />
            <button onClick={onHandleRegistrationClick}>Register</button>
        </div>
    );
};

export default Register;
