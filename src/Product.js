import React from 'react';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import shoppingbag from "./assets/shoppingbag.png";
import johndoe from "./assets/johndoe.jpg";
import ProductItemCard from './Components/ProductItemCard';
import ReviewCard from './Components/ReviewCard';
import FAQAccordion from './Components/FAQAccordian';
import { useNavigate } from 'react-router-dom';
function Product() {
    const navigate = useNavigate()

    function navigateToPayment(){
        navigate("/payment")
    }
    return (
        <>
            <Nav />
            <div className='bg-black px-24 py-6 text-white'>
                <div className='flex'>
                    <div className='w-2/4 flex justify-center items-center border border-white rounded-lg bg-gradient-to-br from-neutral-800 to-black backdrop-blur-10 p-24'>
                        <img src={shoppingbag} alt='Shopping Bag' className='' />
                    </div>
                    <div className='w-2/4 flex flex-col px-8 py-4'>
                        <p className='font-bold text-4xl'>Finance and Accounting prompt</p>
                        <p className='mt-6 text-gray-400'>
                            AI can automate bookkeeping, conduct financial analysis, predict market trends, and personalize investment advice. 
                            AI can automate bookkeeping, conduct financial analysis, predict market trends, and personalize investment advice. 
                            AI can automate bookkeeping, conduct financial analysis, predict market trends, and personalize investment advice.
                        </p>
                        <div className='w-auto self-start px-6 py-1 mt-6 border border-white rounded-3xl'>
                            <p>$4.99</p>
                        </div>
                        <div className='mt-4 flex gap-x-4'>
                            <button className='bg-green-700 bg-opacity-90 px-4 py-1 rounded-md' onClick={navigateToPayment}> Buy Now </button>
                            <button className='border border-white px-4 py-1 rounded-md'> Add to Cart </button>
                        </div>
                    </div>
                </div>

                <div className='mt-12'>
                    <p className='font-bold text-xl'>Similar Products</p>
                    <div className='mt-6 w-full overflow-hidden'>
                        <div className='flex gap-x-6 overflow-x-scroll'>
                            <ProductItemCard 
                                image={shoppingbag}
                                name='Jute bag'
                                price='$4.99'
                                numRatings={88}
                            />
                            <ProductItemCard 
                                image={shoppingbag}
                                name='Jute bag'
                                price='$4.99'
                                numRatings={88}
                            />
                            <ProductItemCard 
                                image={shoppingbag}
                                name='Jute bag'
                                price='$4.99'
                                numRatings={88}
                            />
                            <ProductItemCard 
                                image={shoppingbag}
                                name='Jute bag'
                                price='$4.99'
                                numRatings={88}
                            />
                            <ProductItemCard 
                                image={shoppingbag}
                                name='Jute bag'
                                price='$4.99'
                                numRatings={88}
                            />
                            <ProductItemCard 
                                image={shoppingbag}
                                name='Jute bag'
                                price='$4.99'
                                numRatings={88}
                            />
                        </div>
                    </div>
                </div>

                <div className='mt-12'>
                    <p className='font-bold text-xl'>Reviews and Rating</p>
                    <p className='mt-4 text-3xl'>⭐⭐⭐⭐⭐</p>
                    <div className='mt-4 w-full overflow-hidden'>
                        <div className='flex gap-x-6 overflow-x-scroll'>
                            <ReviewCard
                                photo={johndoe}
                                name='John Doe'
                                review='AI can automate bookkeeping, conduct financial analysis, predict market trends, and personalize investment advice.'
                            />
                            <ReviewCard
                                photo={johndoe}
                                name='John Doe'
                                review='AI can automate bookkeeping, conduct financial analysis, predict market trends, and personalize investment advice.'
                            />
                            <ReviewCard
                                photo={johndoe}
                                name='John Doe'
                                review='AI can automate bookkeeping, conduct financial analysis, predict market trends, and personalize investment advice.'
                            />
                            <ReviewCard
                                photo={johndoe}
                                name='John Doe'
                                review='AI can automate bookkeeping, conduct financial analysis, predict market trends, and personalize investment advice.'
                            />
                             <ReviewCard
                                photo={johndoe}
                                name='John Doe'
                                review='AI can automate bookkeeping, conduct financial analysis, predict market trends, and personalize investment advice.'
                            />
                             <ReviewCard
                                photo={johndoe}
                                name='John Doe'
                                review='AI can automate bookkeeping, conduct financial analysis, predict market trends, and personalize investment advice.'
                            />
                        </div>
                    </div>
                </div>

                <div className='mt-12'>
                    <p className='font-bold text-xl'>FAQ</p>
                    <div className='mt-6 flex flex-col gap-y-4 px-6'>
                        <FAQAccordion 
                            question='What is the price of the product?'
                            answer='AI can automate bookkeeping, conduct financial analysis, predict market trends, and personalize investment advice.'
                        />
                        <FAQAccordion 
                            question='What is the price of the product?'
                            answer='AI can automate bookkeeping, conduct financial analysis, predict market trends, and personalize investment advice.'
                        />
                        <FAQAccordion 
                            question='What is the price of the product?'
                            answer='AI can automate bookkeeping, conduct financial analysis, predict market trends, and personalize investment advice.'
                        />
                        <FAQAccordion 
                            question='What is the price of the product?'
                            answer='AI can automate bookkeeping, conduct financial analysis, predict market trends, and personalize investment advice.'
                        />
                        <FAQAccordion 
                            question='What is the price of the product?'
                            answer='AI can automate bookkeeping, conduct financial analysis, predict market trends, and personalize investment advice.'
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Product;
