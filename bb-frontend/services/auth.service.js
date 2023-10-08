import axios from 'axios';

const API_URL = 'http://localhost:3003/api/auth/';

class AuthService {
    async register(email, password) {
        try {
            const response = await axios.post(API_URL + 'register', {
                email,
                password,
            });
            return response.data;
        } catch (error) {
            console.error('There was an error!', error);
            console.error('Error details', error.response?.data); // Add this line to log the error response from the server
            throw error; // This will allow you to catch this error where you call this method and handle accordingly
        }
    }
}

export default new AuthService();





