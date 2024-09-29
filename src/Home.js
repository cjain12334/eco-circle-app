import React from "react";
import Nav from "./Components/Nav";
import Leaf from "./assets/leaf.png";
import Button1 from "./Components/Button1";
import Mask from "./assets/mask.png"
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
                      <Button1 />
                    </div>
                  </div>

                 <div className="flex justify-center md:justify-end w-full md:w-auto">
                  <img src={Leaf} className="mt-10 md:mt-0 w-full max-w-[500px] h-auto object-contain" alt="Leaf" />
                 </div>
                </div>


              <div className="relative bg-gradient-to-b from-zinc-950 via-neutral-900 to-zinc-950">
                 <img src={Mask} alt="Your Image" class="w-full h-auto mt-10"></img>
                 <div className="absolute inset-0 flex items-center justify-center w-">
                 <p className="text-white text-md font-bold w-[70vw] text-center absolute left-1/2 transform -translate-x-1/2 bg backdrop-blur-sm bg-white/1 border rounded-md">Join a vibrant Community committed to sustainability.Discover local eco-friendly events,track your environmental impact,and connect with others passionate about making a difference.Together,we can create a greener,more sustainable future-one action at a time.</p>
                 </div>
              </div>
            </div>
        </div>
    )
}

export default Home