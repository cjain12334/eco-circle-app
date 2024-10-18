import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'; // Ensure the path is correct
import Login from './Components/Login'; // Ensure the path is correct
import Nav from './Components/Nav';
import Marketplace from './Marketplace'; // Import Marketplace component
import Community from './Community'; // Import Community component
import ProductDetails from './ProductDetails'; // Import for individual product pages
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

                {/* Protected Routes - accessible only when logged in */}
                <Route element={<ProtectedRoute />}>
                    <Route path="/marketplace" element={<Marketplace />} />
                    <Route path="/community" element={<Community />} />
                    <Route path="/product/:id" element={<ProductDetails />} /> {/* Individual product page */}
                    <Route path="/payment" element={<RazorpayPage />} />
                    <Route path="/thank-you" element={<ThankYou />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
