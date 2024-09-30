import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'; // Ensure the path is correct
import Login from './Components/Login'; // Ensure the path is correct
import Nav from './Components/Nav'; // If needed, can be included here
import Footer from './Components/Footer'; // If needed, can be included here

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                {/* Add more routes for other components/pages as needed */}
            </Routes>
            <Footer /> {/* Footer component (if it's part of every page) */}
        </Router>
    );
}

export default App;
