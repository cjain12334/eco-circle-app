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
import { useNavigate } from "react-router-dom";
function Marketplace(){
    const navigate = useNavigate()

    function navigateToProduct(){
        navigate("/product")
    }

    return(
        <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-black-950 to-zinc-950 text-white">
            <div>
                <Nav />
            </div>
            <div className="mt-12 flex flex-col md:flex-row gap-5 bg-gradient-to-b from-zinc-950 via-black-950 to-zinc-950">
                <div className="flex flex-col gap-8 w-full md:w-1/4 items-center">
                    <h1>Accessories</h1>
                    <h1>Fashion</h1>
                    <h1>Electronics</h1>
                    <h1>Home Lifestyle </h1>
                    <h1>Health & Beauty</h1>
                    <h1>Kitchen Ware</h1>
                </div>
                <div className="w-full">
                    <div className="flex flex-col md:flex-row h-full items-center border-t border-l-0 md:border-l-2 md:border-t-0 border-neutral-500">
                       <div className="flex items-center bg-gradient-to-b from-zinc-950 via-neutral-900 to-zinc-950 backdrop-blur-sm bg-white/10 border rounded-xl h-auto md:h-3/4 mt-4 md:mt-0 md:ml-24 w-2/3 gap-x-14 pl-8 md:pl-14 pr-8 md:pr-20">
                        <img src={shoppingbag} alt="Shopping Bag" className="w-24 h-24 md:w-auto md:h-auto"></img>
                        <div>
                            <h1 className="text-green-600 text-2xl md:text-3xl">Karigar</h1>
                            <h1 className="text-2xl md:text-3xl">Up to 10% off Voucher</h1>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
            <div>
    <div className="flex flex-col md:flex-row justify-between mt-3">
        <div className="flex items-center  w-full md:w-3/12 gap-2 md:ml-8 ml-4">
            <div className="h-7 w-2 bg-green-700 rounded-md md:h-9 md:w-3"></div>
            <h1 className="text-lg md:text-xl ">Today's</h1>
            <h1 className="relative top-6 md:top-10 -left-16 md:-left-20 text-3xl md:text-5xl text-green-600 font-extrabold">Flash Sale</h1>
        </div>
        <div className="flex justify-end md:justify-end w-full md:w-auto">
            <img src={leaf1} alt="Leaf Decoration" className="w-40 h-28  md:w-auto md:h-auto" />
        </div>
    </div>

    <div className="bg-gradient-to-b from-zinc-950 via-black-950 to-zinc-950 flex flex-wrap justify-evenly mt-8 gap-4 md:gap-0">
        <div className="flex flex-col items-center">
            <img
                src={jutebag}
                className="w-24 h-32 md:w-32 md:h-40 object-cover border rounded-lg backdrop-blur-sm bg-white/10 p-2 md:p-3"
                alt="jute bag"
            />
            <h1 className="text-start">Jute Bag</h1>
        </div>
        <div className="flex flex-col items-center">
            <img
                src={shoppingbag}
                className="w-24 h-32 md:w-32 md:h-40 object-cover border rounded-lg backdrop-blur-sm bg-white/10 p-2 md:p-3"
                alt="shopping bag"
            />
            <h1 className="text-start">Shopping Bag</h1>
        </div>
        <div className="flex flex-col items-center">
            <img
                src={toothbrush}
                className="w-24 h-32 md:w-32 md:h-40 object-cover border rounded-lg backdrop-blur-sm bg-white/10 p-2 md:p-3"
                alt="toothbrush"
            />
            <h1 className="text-start">Toothbrush</h1>
        </div>
        <div className="flex flex-col items-center">
            <img
                src={bottle}
                className="w-24 h-32 md:w-32 md:h-40 object-cover border rounded-lg backdrop-blur-sm bg-white/10 p-2 md:p-3"
                alt="bottle"
            />
            <h1 className="text-start">Bottle</h1>
        </div>
        <div className="flex flex-col items-center">
            <img
                src={pendrive}
                className="w-24 h-32 md:w-32 md:h-40 object-cover border rounded-lg backdrop-blur-sm bg-white/10 p-2 md:p-3"
                alt="pendrive"
            />
            <h1 className="text-start">Pendrive</h1>
        </div>
    </div>
</div>
            <div className="mt-16">
                <div className="flex items-center w-full md:w-3/12 ml-4 md:ml-10 gap-2">
                    <div className="h-7 w-2 md:h-9 md:w-3 bg-green-700 rounded-md"></div>
                    <h1 className="text-lg md:text-xl">Categories</h1>
                </div>
                <h1 className="text-3xl md:text-5xl text-green-600 font-extrabold relative left-8 md:left-14">Browse By Category</h1>
                <div className="relative h-auto md:h-96 min-w-full bg-gradient-to-b from-zinc-950 via-black-950 to-zinc-950 flex flex-col items-center py-8">
                 <img
                  src={lefttopleaf}
                  alt="Top Left"
                  className="absolute top-6 left-0 w-20 h-24 md:w-32 md:h-36 object-cover"
                 />
                 <img
                    src={rightbottomleaf}
                    alt="Bottom Right"
                    className="absolute bottom-4 right-4 md:bottom-0 md:right-0 w-20 h-24 md:w-32 md:h-32 object-cover"
                 />
                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-36 mt-8">
                 <div className="bg-gradient-to-b from-zinc-950 via-neutral-900 to-zinc-950 backdrop-blur-sm bg-white/10 border rounded-xl w-28 h-36 md:w-32 md:h-40 flex flex-col justify-center items-center">
                    <img src={bag} alt="Bag" className="w-20 h-20 md:w-24 md:h-24"></img>
                    <h1 className="text-sm md:text-base">Bags</h1>
                 </div>
                 <div className="bg-gradient-to-b from-zinc-950 via-neutral-900 to-zinc-950 backdrop-blur-sm bg-white/1 border rounded-xl w-32 h-40 object-cover flex flex-col justify-center items-center">
                    <img src={beauty} alt="Beauty" className="w-20 h-20 md:w-24 md:h-24"></img>
                    <h1 className="text-sm md:text-base">Beauty</h1>
                 </div>
                 <div className="bg-gradient-to-b from-zinc-950 via-neutral-900 to-zinc-950 backdrop-blur-sm bg-white/1 border rounded-xl w-32 h-40 object-cover flex flex-col justify-center items-center">
                    <img src={homedecor} alt="Home Decor" className="w-20 h-20 md:w-24 md:h-24"></img>
                    <h1 className="text-sm md:text-base">Home Decor</h1>
                 </div>
                 <div className="bg-gradient-to-b from-zinc-950 via-neutral-900 to-zinc-950 backdrop-blur-sm bg-white/1 border rounded-xl w-32 h-40 object-cover flex flex-col justify-center items-center">
                    <img src={gadgets} alt="Gadgets" className="w-20 h-20 md:w-24 md:h-24"></img>
                    <h1 className="text-sm md:text-base">Gadgets</h1>
                 </div>
                 <div className="bg-gradient-to-b from-zinc-950 via-neutral-900 to-zinc-950 backdrop-blur-sm bg-white/1 border rounded-xl w-32 h-40 object-cover flex flex-col justify-center items-center">
                    <img src={furniture} alt="Furniture" className="w-20 h-20 md:w-24 md:h-24"></img>
                    <h1 className="text-sm md:text-base">Furniture</h1>
                 </div>
                 </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-2 w-full md:w-3/12 ml-4 md:ml-8">
    <div className="flex items-center gap-2">
        <div className="h-7 w-2 bg-green-700 rounded-md md:h-9 md:w-3"></div>
        <h1 className="text-lg md:text-xl">All Products</h1>
    </div>
    <div className="mt-2 md:mt-0 md:ml-4">
        <h1 className="text-3xl md:text-5xl text-green-600 font-extrabold text-center md:text-left">
            Explore Our Products
        </h1>
    </div>
</div>
          <div className="flex justify-center">
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-24">
                <div className="flex flex-col items-center md:items-start gap-4">
                    <div><img src={img1} className="w-32 h-32 md:w-auto md:h-auto object-cover" alt="Organic Cotton Tote Bag"></img></div>
                    <h1 className="text-base md:text-lg">Organic Cotton Tote Bag</h1>
                    <h1 className="text-sm md:text-base">50 RS.</h1>
                    <Button1 name="Explore More" onClick={navigateToProduct}></Button1>
                </div>
                <div className="flex flex-col items-center md:items-start gap-4">
                    <div><img src={img2} className="w-32 h-32 md:w-auto md:h-auto object-cover" alt="Hemp backpack"></img></div>
                    <h1 className="text-base md:text-lg">Hemp backpack</h1>
                    <h1 className="text-sm md:text-base">999 RS.</h1>
                    <Button1 name="Explore More" onClick={navigateToProduct}></Button1>
                </div>
                <div className="flex flex-col items-center md:items-start gap-4">
                    <div><img src={img3} className="w-32 h-32 md:w-auto md:h-auto object-cover" alt="Organic Cotton T-Shirts"></img></div>
                    <h1 className="text-base md:text-lg">Organic Cotton T-Shirts</h1>
                    <h1 className="text-sm md:text-base">499 RS.</h1>
                    <Button1 name="Explore More" onClick={navigateToProduct}></Button1>
                </div>
                <div className="flex flex-col items-center md:items-start gap-4">
                    <div><img src={img4} className="w-32 h-32 md:w-auto md:h-auto object-cover" alt="Bamboo toothbrush"></img></div>
                    <h1 className="text-base md:text-lg">Bamboo toothbrush</h1>
                    <h1 className="text-sm md:text-base">99 RS.</h1>
                    <Button1 name="Explore More" onClick={navigateToProduct}></Button1>
                </div>
                <div className="flex flex-col items-center md:items-start gap-4">
                    <div><img src={img5} className="w-32 h-32 md:w-auto md:h-auto object-cover" alt="Bamboo pens and pencils"></img></div>
                    <h1 className="text-base md:text-lg">Bamboo pens and pencils</h1>
                    <h1 className="text-sm md:text-base">49 RS.</h1>
                    <Button1 name="Explore More" onClick={navigateToProduct}></Button1>
                </div>
                <div className="flex flex-col items-center md:items-start gap-4">
                    <div><img src={img6} className="w-32 h-32 md:w-auto md:h-auto object-cover" alt="Jute grocery bag"></img></div>
                    <h1 className="text-base md:text-lg">Jute grocery bag</h1>
                    <h1 className="text-sm md:text-base">59 RS.</h1>
                    <Button1 name="Explore More" onClick={navigateToProduct}></Button1>
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