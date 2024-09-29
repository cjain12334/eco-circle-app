import React from "react";
import footer from "../assets/footerimage.png"
import linkedin from "../assets/linkedin.png"
import instagram from "../assets/instagram.png"
import mail from "../assets/mail.png"
import youtube from "../assets/youtube.png"
import facebook from "../assets/facebook.png"
function Footer(){
return(
    <div  className="h-96 w-full bg-cover bg-center  flex flex-col items-center justify-center gap-14 "style={{ backgroundImage: `url(${footer})`}}>
        <div>
            <h1>Let's get Social</h1>
        </div>  
        <div className="flex gap-10">
            <img src={linkedin}></img>
            <img src={instagram}></img>
            <img src={mail}></img>
            <img src={youtube}></img>
            <img src={facebook}></img>
        </div>
        <div className="flex gap-5 items-center">
            <h1>Privacy policy</h1>
            <div className="bg-green-700 h-3 w-3 rounded-full"></div>
            <h1>Terms & Conditions</h1>
        </div>
    </div>
)
}

export default Footer