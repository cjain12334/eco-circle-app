import React from "react";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Emain from "./assets/emain.png";
import Card from "./Components/Card";
import Bottle from "./assets/bottle_icon.png";
import Mask from "./assets/mask.png";
import FileCard from "./Components/FileCard";
import Cam from "./assets/Cam.png";

function EWaste() {
  return (
    <>
      <Nav />
      <div className="bg-black pb-24">
        <div>
          <div className="relative">
            <img src={Emain} alt="emain" className="w-full"/>
            <p className="absolute top-4 right-10 text-white font-bold text-3xl">
              GIVE E-WASTE TO US AND <br /> TAKE MONEY BACK
            </p>
          </div>
          {/* Card begins */}
          <div className="flex w-full justify-center -translate-y-32">
            <div className="flex gap-x-10">
              <Card
                imgPath={Bottle}
                title="Reuse"
                desc='You can "reuse" materials in their original form instead of throwing them away, or pass those materials on to others who could use them too!'
              />
              <Card
                imgPath={Bottle}
                title="Reduce"
                desc='A key part of waste "reduction" is "conservation"—using natural resources wisely, and using less than usual in order avoid waste.'
              />
              <Card
                imgPath={Bottle}
                title="Recycle"
                desc="Your recycling mission is not impossible! In fact, it is very simple: Dont throw away anything that can be recycled!"
              />
            </div>
          </div>
        </div>

        {/* Big quote */}
        <div className="relative bg-gradient-to-b from-zinc-950 via-neutral-900 to-zinc-950 -translate-y-12">
          <img src={Mask} alt="mask" class="w-full h-auto"></img>
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-md w-[70vw] text-center text-3xl absolute left-1/2 transform -translate-x-1/2 bg backdrop-blur-sm bg-white/1 border rounded-md p-12">
              Get rid of your outdated tech the right way by recycling. It's a small step with a massive impact on creating a healthier, greener planet for future generations.
            </p>
          </div>
        </div>

        {/* Select Page */}
        <div>
          <p className="text-green-400 text-center font-bold text-6xl">
            Select the type of your E-Waste
          </p>
          <div className="flex w-full justify-center mt-20">
            <div className="flex gap-x-10">
              <Card
                imgPath={Bottle}
                title="Reuse"
                desc='You can "reuse" materials in their original form instead of throwing them away, or pass those materials on to others who could use them too!'
              />
              <Card
                imgPath={Bottle}
                title="Reduce"
                desc='A key part of waste "reduction" is "conservation"—using natural resources wisely, and using less than usual in order avoid waste.'
              />
              <Card
                imgPath={Bottle}
                title="Recycle"
                desc="Your recycling mission is not impossible! In fact, it is very simple: Dont throw away anything that can be recycled!"
              />
            </div>
          </div>
        </div>

        {/* Scan and Drop */}
        <div className="flex w-full justify-center mt-24">
          <div className="flex gap-x-10">
            <FileCard heading='Cam' icon={Cam} title ='Scan your E-Waste here' btnText='Scan Files' action='Scanned'/>
            <FileCard heading='Cam' icon={Cam} title ='Scan your E-Waste here' btnText='Scan Files' action='Scanned'/>
          </div>
        </div>
        
      </div>
      <Footer />
    </>
  );
}

export default EWaste;
