import { useState } from 'react';
import axios from 'axios';

const useAuth = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const signup = async (userData) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.post('http://localhost:3000/api/users/signup', userData);
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
            const response = await axios.post('http://localhost:3000/api/users/login', credentials);
            return response.data;
        } catch (err) {
            setError(err.response.data.message || 'Login failed');
        } finally {
            setLoading(false);
        }
    };

    return { signup, login, loading, error };
};

export default useAuth;
