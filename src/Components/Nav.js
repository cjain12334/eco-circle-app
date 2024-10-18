import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Logo from "../assets/logo.png";
import Userlogo from "../assets/user.png";

function Nav({ onLoginClick }) {
    return (
        <div>
            <div className="min-h-16 flex text-white items-center justify-between bg-black">
                <img className="h-15 w-16 mx-5" src={Logo} alt="Logo" />
                <ul className="list-none flex space-x-8">
                    <li>
                        <Link to="/" className="cursor-pointer">Home</Link>
                    </li>
                    <li>
                        <Link to="/marketplace" className="cursor-pointer">Marketplace</Link>
                    </li>
                    <li>
                        <Link to="/community" className="cursor-pointer">Community</Link>
                    </li>
                    <li
                        className="cursor-pointer hover:underline"
                        onClick={onLoginClick} // Trigger the login functionality
                    >
                        Login
                    </li>
                </ul>
                <img src={Userlogo} className="h-6 m-5" alt="User Logo" />
            </div>
        </div>
    );
}

export default Nav;
