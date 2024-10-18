import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'; // Ensure the path is correct
import EWaste from './EWaste'; // Ensure the path is correct
import Product from './Product'; // Ensure the path is correct
import Login from './Components/Login'; // Ensure the path is correct
import Marketplace from './Marketplace';
import Profile from './Profile'
import Community from './Community'; // Import Community component
import RazorpayPage from './Payment'; // Import Razorpay integration page (update this if necessary)
import ThankYou from './ThankYou'; // Import Thank You page
import ProtectedRoute from './Components/ProtectedRoute'; // Protected Route component

function App() {
    return (
        <Router>
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                {/* Add the route of market place */}
                {/* Add more routes for other components/pages as needed */}

                {/* Protected Routes - accessible only when logged in */}
                <Route element={<ProtectedRoute />}>
                    <Route path="/marketplace" element={<Marketplace />} />
                    <Route path="/community" element={<Community />} />
                    <Route path="/ewaste" element={<EWaste />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/payment" element={<RazorpayPage />} />
                    <Route path="/thank-you" element={<ThankYou />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
