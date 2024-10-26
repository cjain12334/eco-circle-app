import { useState } from 'react';
import axios from 'axios';

const useAuth = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const signup = async (userData) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.post('http://localhost:4000/api/users/signup', userData);
            return response.data;
        } catch (err) {
            setError(err.response.data.message || 'Signup failed');
        } finally {
            setLoading(false);
        }
    };

    const login = async (credentials) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.post('http://localhost:4000/api/users/login', credentials);
            return response.data;
        } catch (err) {
            setError(err.response.data.message || 'Login failed');
        } finally {
            setLoading(false);
        }
    };

    // Return an object that includes isAuthenticated
    const isAuthenticated = !!localStorage.getItem('token'); // or however you check authentication

    return { signup, login, loading, error, isAuthenticated }; // Include isAuthenticated in the return object
};

export default useAuth;
