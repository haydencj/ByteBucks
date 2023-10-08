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
        }
    }

    async login(email, password) {
        try {
            const response = await axios.post(API_URL + 'login', {
                email,
                password,
            });
            if (response.data.token) {
                localStorage.setItem('user', JSON.stringify(response.data));
            }
            return response.data;
        } catch (error) {
            console.error('There was an error!', error);
        }
    }

    logout() {
        localStorage.removeItem('user');
    }
}

export default new AuthService();





