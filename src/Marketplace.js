import React from "react";
import Nav from "./Components/Nav";
import shoppingbag from "./assets/shoppingbag.png";
import leaf1 from "./assets/leaf1.png"
import bottle from "./assets/bottle.png";
import pendrive from "./assets/pendrive.png";
import toothbrush from "./assets/Toothbrush.png";
import jutebag from "./assets/jutebag.png";
import lefttopleaf from "./assets/lefttopleaf.png";
import rightbottomleaf from "./assets/rightbottomleaf.png";
import bag from "./assets/bags.png"
import beauty from "./assets/beauty.png"
import homedecor from "./assets/homedecor.png"
import gadgets from "./assets/gadgets.png"
import furniture from "./assets/furniture.png"
import img1 from "./assets/img1.png"
import img2 from "./assets/img2.png"
import img3 from "./assets/img3.png"
import img4 from "./assets/img4.png"
import img5 from "./assets/img5.png"
import img6 from "./assets/img6.png"
import Button1 from "./Components/Button1";
import Footer from "./Components/Footer";
function Marketplace(){
    return(
        <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-black-950 to-zinc-950 text-white">
            <div>
                <Nav />
            </div>
            <div className="mt-12 flex gap-5 bg-gradient-to-b from-zinc-950 via-black-950 to-zinc-950">
                <div className="flex flex-col gap-8 w-1/4 items-center">
                    <h1>Accessories</h1>
                    <h1>Fashion</h1>
                    <h1>Electronics</h1>
                    <h1>Home Lifestyle </h1>
                    <h1>Health & Beauty</h1>
                    <h1>Kitchen Ware</h1>
                </div>
                <div>
                    <div className="border-l-2 border-l-neutral-500 flex h-full items-center">
                       <div className="flex items-center bg-gradient-to-b from-zinc-950 via-neutral-900 to-zinc-950 backdrop-blur-sm bg-white/1 border rounded-xl h-3/4  ml-24 w-full gap-x-14 pl-14 pr-20">
                        <img src={shoppingbag}></img>
                        <div>
                            <h1 className="text-green-600 text-3xl">Karigar</h1>
                            <h1 className="text-3xl">Up to 10% off Voucher</h1>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex justify-between mt-3">
                    <div className="flex items-center justify-center w-3/12 gap-2">
                        <div className="h-9 w-3 bg-green-700 rounded-md"></div>
                        <h1 className="text-xl">Today's</h1>
                        <h1 className="relative top-10 -left-20 text-5xl text-green-600 font-extrabold">Flah Sale</h1>
                    </div>
                    <div className="flex">
                        <img src={leaf1}></img>
                    </div>
                </div>
                <div className="bg-gradient-to-b from-zinc-950 via-black-950 to-zinc-950 flex justify-evenly mt-8">
                    <div>
                    <img
                    src={jutebag}
                    className="w-32 h-40 object-cover border rounded-lg backdrop-blur-sm bg-white/2 p-3"
                    alt="jute"
                    />
                    <h1 className="text-start">Jute Bag</h1>
                    </div>
                    <div>
                    <img
                    src={shoppingbag}
                    className="w-32 h-40 object-cover border rounded-lg backdrop-blur-sm bg-white/2 p-3"
                    alt="shoppingbag"
                    />
                    <h1 className="text-start">Shopping bag</h1>
                    </div>
                    <div>
                    <img
                    src={toothbrush}
                    className="w-32 h-40 object-cover border rounded-lg backdrop-blur-sm bg-white/2 p-3"
                    alt="toothbrush"
                    />
                    <h1 className="text-start">Toothbrush</h1>
                    </div>
                    <div>
                    <img
                    src={bottle}
                    className="w-32 h-40 object-cover border rounded-lg backdrop-blur-sm bg-white/2 p-3"
                    alt="bottle"
                    />
                    <h1 className="text-start">Bottle</h1>
                    </div>
                    <div>
                    <img
                    src={pendrive}
                    className="w-32 h-40 object-cover border rounded-lg backdrop-blur-sm bg-white/2 p-3"
                    alt="pendrive"
                    />
                    <h1 className="text-start">Pendrive</h1>
                    </div>
                </div>
            </div>
            <div className="mt-16">
                <div className="flex items-center w-3/12 ml-10 gap-2">
                    <div className="h-9 w-3 bg-green-700 rounded-md"></div>
                    <h1 className="text-xl">Categories</h1>
                </div>
                <h1 className=" text-5xl text-green-600 font-extrabold relative left-14">Browse By Category</h1>
                <div className="relative h-96 min-w-screen bg-gradient-to-b from-zinc-950 via-black-950 to-zinc-950 flex justify-center items-center">
                 <img
                  src={lefttopleaf}
                  alt="Top Left"
                  className="absolute top-6 left-0 w-32 h-36 object-cover"
                 />
                 <img
                    src={rightbottomleaf}
                    alt="Bottom Right"
                    className="absolute bottom-0 right-0 w-32 h-32 object-cover"
                 />
                 <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-36 mt-8">
                 <div className="bg-gradient-to-b from-zinc-950 via-neutral-900 to-zinc-950 backdrop-blur-sm bg-white/1 border rounded-xl w-32 h-40 object-cover flex flex-col justify-center items-center">
                    <img src={bag}></img>
                    <h1>Bags</h1>
                 </div>
                 <div className="bg-gradient-to-b from-zinc-950 via-neutral-900 to-zinc-950 backdrop-blur-sm bg-white/1 border rounded-xl w-32 h-40 object-cover flex flex-col justify-center items-center">
                    <img src={beauty}></img>
                    <h1>Beauty</h1>
                 </div>
                 <div className="bg-gradient-to-b from-zinc-950 via-neutral-900 to-zinc-950 backdrop-blur-sm bg-white/1 border rounded-xl w-32 h-40 object-cover flex flex-col justify-center items-center">
                    <img src={homedecor}></img>
                    <h1>Home Decor</h1>
                 </div>
                 <div className="bg-gradient-to-b from-zinc-950 via-neutral-900 to-zinc-950 backdrop-blur-sm bg-white/1 border rounded-xl w-32 h-40 object-cover flex flex-col justify-center items-center">
                    <img src={gadgets}></img>
                    <h1>Gadgets</h1>
                 </div>
                 <div className="bg-gradient-to-b from-zinc-950 via-neutral-900 to-zinc-950 backdrop-blur-sm bg-white/1 border rounded-xl w-32 h-40 object-cover flex flex-col justify-center items-center">
                    <img src={furniture}></img>
                    <h1>Furniture</h1>
                 </div>
                 </div>
                </div>
            </div>
            <div>
                <div className="flex items-center justify-center gap-2 w-1/12 ml-10">
                  <div className="h-9 w-3 bg-green-700 rounded-md"></div>
                  <h1 className="text-xl">All Products</h1>
                </div>
                <h1 className=" text-5xl text-green-600 font-extrabold relative left-14">Explore Our Products</h1>
            </div>
          <div className="flex justify-center">
            <div className="mt-12 grid grid-cols-3 gap-24">
                <div className="flex flex-col gap-4">
                    <div><img src={img1}></img></div>
                    <h1>Organic Cotton Tote Bag</h1>
                    <h1>50 RS.</h1>
                    <Button1 name="Buy now"></Button1>
                </div>
                <div className="flex flex-col gap-4">
                    <div><img src={img2}></img></div>
                    <h1>Hemp backpack</h1>
                    <h1>999 RS.</h1>
                    <Button1 name="Buy now"></Button1>
                </div>
                <div className="flex flex-col gap-4">
                    <div><img src={img3}></img></div>
                    <h1>Organic Cotton T-Shirts</h1>
                    <h1>499 RS.</h1>
                    <Button1 name="Buy now"></Button1>
                </div>
                <div className="flex flex-col gap-4">
                    <div><img src={img4}></img></div>
                    <h1>Bamboo toothbrush</h1>
                    <h1>99 RS.</h1>
                    <Button1 name="Buy now"></Button1>
                </div>
                <div className="flex flex-col gap-4">
                    <div><img src={img5}></img></div>
                    <h1>Bamboo pens and pencils</h1>
                    <h1>49 RS.</h1>
                    <Button1 name="Buy now"></Button1>
                </div>
                <div className="flex flex-col gap-4">
                    <div><img src={img6}></img></div>
                    <h1>Jute grocery bag</h1>
                    <h1>59 RS.</h1>
                    <Button1 name="Buy now"></Button1>
                </div>
            </div>
          </div>
          <div className="mt-40">
          <Footer/>
          </div>
        </div>
    )
}

export default Marketplace