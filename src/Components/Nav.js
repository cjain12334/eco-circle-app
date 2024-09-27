import React from "react";
import Logo from "../assets/logo.png"
import Userlogo from "../assets/user.png"
function Nav(){
    return(
        <div className="">
            <div className="h-16 flex bg-black text-white items-center justify-between">
                <img className="h-15 w-16 mx-5" src={Logo}></img>
                <ul className="list-none flex space-x-8">
                    <li>Home</li>
                    <li>Marketplace</li>
                    <li>Community</li>
                    <li>Login</li>
                </ul>
                <img src={Userlogo} className="h-6 m-5"></img>
            </div>
        </div>
    )
}

export default Nav