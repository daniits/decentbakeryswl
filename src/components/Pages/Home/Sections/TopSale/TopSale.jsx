import React from 'react';
import { Link } from 'react-router-dom';

const TopSale = () => {
    return (
        <div>
            <div className="bg-[url('/images/image/bannerTopSale.png')] bg-cover bg-center bg-no-repeat h-[500px] md:h-[500px] mx-auto py-20 my-20">
                <div className="flex flex-col justify-center items-center gap-8 text-center px-6 md:px-20 lg:px-80">
                    <h3 className="text-3xl font-bold text-[#2b4174]">
                        <span className="text-[#fc7c7c] font-semibold">70%</span> Sale Off
                    </h3>
                    <h3 className="text-4xl md:text-5xl font-playfair font-semibold">
                        Best Quality Bakery Products
                    </h3>
                    <p className="text-sm md:text-base lg:text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sunt. Voluptatum in repellendus tempora illum sit neque natus quibusdam eveniet.
                    </p>
                    <Link to="/shop">
                    <button className="bg-[#fc7c7c] animated-button text-sm hover:animate-fade-slide-up transition-colors duration-300 px-8 py-4 rounded-xl font-medium">
                        <span>SHOP NOW</span>
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TopSale;
