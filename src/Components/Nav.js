import React from "react";
import Logo from "../assets/logo.png";
import Userlogo from "../assets/user.png";

function Nav({ onLoginClick }) {  // Accept the onLoginClick prop
    return (
        <div>
            <div className="min-h-16 flex text-white items-center justify-between bg-black">
                <img className="h-15 w-16 mx-5" src={Logo} alt="Logo" />
                <ul className="list-none flex space-x-8">
                    <li className="cursor-pointer">Home</li>
                    <li className="cursor-pointer">Marketplace</li>
                    <li className="cursor-pointer">Community</li>
                    <li
                        className="cursor-pointer hover:underline"
                        onClick={onLoginClick}  // Trigger the login functionality
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
