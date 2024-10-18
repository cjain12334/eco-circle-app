import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button1 from './Components/Button1';

function ProductDetails() {
    const location = useLocation();
    const navigate = useNavigate();
    const { product } = location.state; // Assuming product data is passed via state

    const handleBuyNow = () => {
        // Navigate to Razorpay payment page
        navigate('/payment', { state: { product } });
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-zinc-950 to-zinc-950 text-white p-4">
            <h1 className="text-4xl">{product.name}</h1>
            <img src={product.image} alt={product.name} className="w-1/2 h-auto" />
            <h2 className="text-2xl">{product.price} RS.</h2>
            <p>{product.description}</p>
            <Button1 name="Buy Now" onClick={handleBuyNow} />
        </div>
    );
}

export default ProductDetails;
