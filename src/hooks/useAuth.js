import { useState } from 'react';
import axios from 'axios';

const useAuth = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const signup = async (userData) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/users/signup`, userData);
            
            // Assuming the response contains a token
            const { token } = response.data;
            
            if (token) {
                localStorage.setItem('token', token); // Store token in localStorage
                // Optionally, you can store the token in state here as well
            }
    
            return response.data; // Return the entire response or specific fields as needed
        } catch (err) {
            setError(err.response.data.message || 'Signup failed');
        } finally {
            setLoading(false);
        }
    };

    const login = async (credentials) => {
        setLoading(true); // Indicate loading state (e.g., show a loading spinner)
        setError(null); // Clear any previous errors
        try {
            // Send a POST request to the backend API with the user's credentials
            console.log(process.env.REACT_APP_BACKEND_URL);
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/users/login`, credentials);
            
            // If the request is successful, return the response data
            return response.data; 
        } catch (err) {
            // If an error occurs, set the error state with the message from the server
            setError(err.response.data.message || 'Login failed');
        } finally {
            // Reset loading state regardless of success or failure
            setLoading(false);
        }
    };
    
    // Return an object that includes isAuthenticated
    const isAuthenticated = !!localStorage.getItem('token'); // or however you check authentication

    return { signup, login, loading, error, isAuthenticated, setError }; // Include isAuthenticated in the return object
};

export default useAuth;
