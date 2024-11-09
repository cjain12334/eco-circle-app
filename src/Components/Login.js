import React, { useState } from "react";
import useAuth from "../hooks/useAuth"; // Adjust the import path as necessary
import login_bg from "../assets/login.jpg"; 
import logo from "../assets/logo.png"; 
import googleLogo from "../assets/googleLogo.png"; 
import { useNavigate } from 'react-router-dom';
function Login() {
    const { login, signup, loading, error, setError } = useAuth();
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
    
        let result; // Declare a variable to store the result of signup or login
    
        // Check if the user is signing up or logging in
        if (isSignup) {
            result = await signup(formData); // Call the signup function
        } else {
            result = await login({ email: formData.email, password: formData.password }); // Call the login function
        }
    
        // Check if the result has a token, indicating successful signup or login
        if (result && result.token) {
            localStorage.setItem('token', result.token); // Store the token in localStorage
            navigate('/profile'); // Redirect to the Marketplace
        } else {
            const errorMessage = result?.error || 'An error occurred during signup or login.';
            setError(errorMessage); // Set the error message
            console.error('Error during signup/login:', errorMessage);
            
        }
    };
    
    return (
        <div className="min-h-screen flex items-center justify-center relative">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${login_bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />
            <div className="absolute inset-0 bg-black opacity-50 z-0" />
            <div className="absolute top-0 left-0 z-20">
                <img src={logo} alt="App Logo" className="h-15 w-16 mx-5 my-3" />
            </div>
            <div className="relative z-10 bg-white/10 backdrop-blur-lg p-8 rounded-lg shadow-lg max-w-lg w-full mx-4 ring-1 ring-white/40 shadow-white/30">
                <h1 className="text-4xl font-bold text-center text-white mb-4">
                    {isSignup ? "Create Account" : "Login"}
                </h1>
                <p className="text-center text-gray-400 mb-6">
                    {isSignup ? "Join us today to build a better future." : "Welcome back! Please login to your account."}
                </p>

                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    {isSignup && (
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    )}
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-600 p-3 rounded-lg text-white font-semibold"
                    >
                        {isSignup ? "Sign Up" : "Login"}
                    </button>
                </form>

                <p className="text-center text-sm text-gray-400 mt-4">
                    {isSignup ? "Already have an account?" : "Don't have an account?"}
                    <span
                        onClick={() => setIsSignup(!isSignup)}
                        className="cursor-pointer text-green-500 hover:underline ml-1"
                    >
                        {isSignup ? "Login here" : "Sign up here"}
                    </span>
                </p>
                {loading && <p className="text-white text-center">Loading...</p>}
                {error && <p className="text-red-500 text-center">{error}</p>}
            </div>
        </div>
    );
}

export default Login;
