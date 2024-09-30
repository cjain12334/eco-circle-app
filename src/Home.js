import React, { useState } from "react";
import Nav from "./Components/Nav";
import Leaf from "./assets/leaf.png";
import Button1 from "./Components/Button1";
import Mask from "./assets/mask.png";
<<<<<<< HEAD
import circulareconomy from "./assets/circulareconomy.png"
import progresstracking from "./assets/ProgressTracking.png"
import community from "./assets/Community.png"
import bin from "./assets/Bin.png"
import naturecollection from "./assets/naturecollection.png"
import shoppingbag from "./assets/shoppingbag.png"
import bottle from "./assets/bottle.png"
import greenhouse from "./assets/greenhouse.png"
import Footer from "./Components/Footer";
function Home(){
    return(
        <div>
            <div className="h-100vh bg-gradient-to-b from-zinc-950 via-black-950 to-zinc-950 text-white">
                <Nav></Nav>
                <div className="flex flex-col md:flex-row items-center justify-between mt-36
                bg-gradient-to-b from-zinc-950 via-neutral-900 to-zinc-950">
                  <div className="flex flex-col gap-5 text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl ml-0 md:ml-12 font-bold">Building Communities for</h1>
                    <h1 className="text-6xl md:text-9xl ml-0 md:ml-12 font-bold">TOMORROW</h1>
                    <div className="ml-0 md:ml-12">
                      <Button1 name="Explore more"></Button1>
=======
import Login from "./Components/Login"; // Ensure the path is correct

function Home() {
    const [showLogin, setShowLogin] = useState(false);

    const handleLoginClick = () => {
        console.log("Login clicked from Navbar");
        setShowLogin(true); // Trigger login page when the login link is clicked
    };

    return (
        <div>
            {!showLogin ? (
                <div className="h-screen bg-gradient-to-b from-zinc-950 via-black-950 to-zinc-950 text-white">
                    <Nav onLoginClick={handleLoginClick} />
                    
                    <div className="flex flex-col md:flex-row items-center justify-between mt-36 bg-gradient-to-b from-zinc-950 via-neutral-900 to-zinc-950">
                        <div className="flex flex-col gap-5 text-center md:text-left">
                            <h1 className="text-4xl md:text-6xl ml-0 md:ml-12 font-bold">
                                Building Communities for
                            </h1>
                            <h1 className="text-6xl md:text-9xl ml-0 md:ml-12 font-bold">
                                TOMORROW
                            </h1>
                            <div className="ml-0 md:ml-12">
                                <Button1 text="Explore more" />
                            </div>
                        </div>

                        <div className="flex justify-center md:justify-end w-full md:w-auto">
                            <img
                                src={Leaf}
                                className="mt-10 md:mt-0 w-full max-w-[500px] h-auto object-contain"
                                alt="Leaf"
                            />
                        </div>
>>>>>>> 156bcec (Added login component and updated nav)
                    </div>

                    <div className="relative bg-gradient-to-b from-zinc-950 via-neutral-900 to-zinc-950">
                        <img
                            src={Mask}
                            alt="Your Image"
                            className="w-full h-auto mt-10"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <p className="text-white text-md font-bold w-[70vw] text-center absolute left-1/2 transform -translate-x-1/2 bg backdrop-blur-sm bg-white/1 border rounded-md">
                                Join a vibrant Community committed to sustainability. Discover
                                local eco-friendly events, track your environmental impact, and
                                connect with others passionate about making a difference. Together,
                                we can create a greener, more sustainable future — one action at a
                                time.
                            </p>
                        </div>
                    </div>
                </div>
<<<<<<< HEAD


              <div className="relative bg-gradient-to-b from-zinc-950 via-neutral-900 to-zinc-950">
                 <img src={Mask} alt="mask" class="w-full h-auto mt-10"></img>
                 <div className="absolute inset-0 flex items-center justify-center w-">
                 <p className="text-white text-md font-bold w-[70vw] text-center absolute left-1/2 transform -translate-x-1/2 bg backdrop-blur-sm bg-white/1 border rounded-md">Join a vibrant Community committed to sustainability.Discover local eco-friendly events,track your environmental impact,and connect with others passionate about making a difference.Together,we can create a greener,more sustainable future-one action at a time.</p>
                 </div>
              </div>
              <div className="flex flex-col gap-10 bg-gradient-to-b from-zinc-950 via-neutral-900 to-zinc-950 ">
                <h1 className="text-center text-6xl text-green-600 font-bold">Services</h1>
                <div className="flex items-center justify-center gap-24 pl-16 pr-16">
                  <div >
                    <div className="bg-gradient-to-b from-zinc-950 via-neutral-900 to-zinc-950 backdrop-blur-sm bg-white/1 border rounded-xl flex flex-col py-6 px-7 gap-5 w-60">
                    <img src={circulareconomy} className="h-40 object-contain" alt="circulareconomy">
                    </img>
                    <p className="text-green-600 font-bold text-center">circulareconomy</p>
                    </div>
                    <p className="pr-16">Promotes the exchange of used items.</p>
                  </div>
                  <div>
                    <div className="bg-gradient-to-b from-zinc-950 via-neutral-900 to-zinc-950 backdrop-blur-sm bg-white/1 border rounded-xl flex flex-col py-6 px-7 gap-5 w-60">
                    <img src={progresstracking} className="h-40 object-contain" alt="progresstracking">
                    </img>
                    <p className="text-green-600 font-bold text-center">progress tracking</p>
                    </div>
                    <p className="pr-16">Tracks eco-friendly actions like using public transport or recycling.</p>
                  </div>
                  <div>
                    <div className="bg-gradient-to-b from-zinc-950 via-neutral-900 to-zinc-950 backdrop-blur-sm bg-white/1 border rounded-xl flex flex-col py-6 px-7 gap-5 w-60">
                    <img src={community} className="h-40 object-fill" alt="community">
                    </img>
                    <p className="text-green-600 font-bold text-center">community building</p>
                    </div>
                    <p className="pr-16">Users can discover local eco-friendly events, track participation.</p>
                  </div>
                  <div>
                    <div className="bg-gradient-to-b from-zinc-950 via-neutral-900 to-zinc-950 backdrop-blur-sm bg-white/1 border rounded-xl flex flex-col py-6 px-7 gap-5 w-60">
                    <img src={bin} className="h-40 object-contain" alt="bin">
                    </img>
                    <p className="text-green-600 font-bold text-center">Bin</p>
                    </div>
                    <p className="pr-16">Enabling businesses to collect plastic and e-waste from users.</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-center">
                  <h1 className="text-green-600 text-6xl mt-5 font-bold">Featured Products</h1>
                </div>
                <div  className="h-96 w-full bg-cover bg-center mt-6 flex items-center justify-center gap-14"style={{ backgroundImage: `url(${naturecollection})`}}>
                <div class="grid grid-cols-3 gap-16">
                      <img src={shoppingbag} class="w-32 h-40 object-cover border rounded-lg backdrop-blur-sm bg-white/2 p-3" />
                      <img src={greenhouse} class="w-32 h-40 object-cover border rounded-lg backdrop-blur-sm bg-white/2 p-3" />
                      <img src={bottle} class="w-32 h-40 object-cover border rounded-lg backdrop-blur-sm bg-white/2 p-3" />
                      <div className="relative left-48"><Button1 name="Shop more"></Button1></div>
                 </div>
                </div>
              </div>
              <Footer></Footer>
            </div>
=======
            ) : (
                <Login onClose={() => setShowLogin(false)} />
            )}
>>>>>>> 156bcec (Added login component and updated nav)
        </div>
    );
}

export default Home;
