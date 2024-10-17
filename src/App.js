import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'; // Ensure the path is correct
import EWaste from './EWaste'; // Ensure the path is correct
import Product from './Product'; // Ensure the path is correct
import Login from './Components/Login'; // Ensure the path is correct
import Nav from './Components/Nav'; // If needed, can be included here
import Marketplace from './Marketplace';
import Profile from './Profile'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/ewaste" element={<EWaste />} />
                <Route path="/product" element={<Product />} />
                <Route path="/profile" element={<Profile />} />
                {/* Add the route of market place */}
                {/* Add more routes for other components/pages as needed */}
            </Routes>
        </Router>
        
    );
}

export default App;
