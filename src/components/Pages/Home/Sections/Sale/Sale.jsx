import React from 'react';

const Sale = () => {
    return (
        <div className="flex flex-col md:flex-row gap-10 py-10 md:py-20 justify-center items-center">

            <div className="bg-[url('/images/image/smallBanner1.jpg')] bg-cover bg-center w-[90%] md:w-[40%] h-[250px] md:h-[320px] rounded-lg">
                <div className="flex flex-col gap-4 py-8 md:py-16 px-6 md:px-8 w-[70%] md:w-[50%]">
                    <h3 className="text-sm md:text-lg font-bold text-[#2b4174]">
                        <span className="text-[#fc7c7c] font-semibold">70%</span> Sale Off
                    </h3>
                    <h3 className="text-xl md:text-4xl font-playfair font-semibold">
                        Best Quality Products
                    </h3>
                    <button className="bg-[#fc7c7c] animated-button text-xs md:text-sm hover:animate-fade-slide-up transition-colors duration-300 px-4 md:px-5 py-2 w-[60%] md:w-[50%] rounded-xl font-medium">
                        <span>SHOP NOW</span>
                    </button>
                </div>
            </div>

            <div className="bg-[url('/images/image/smallBanner2.jpg')] bg-cover bg-center w-[90%] md:w-[40%] h-[250px] md:h-[320px] rounded-lg">
                <div className="flex flex-col gap-4 py-8 md:py-16 px-6 md:px-8 w-[70%] md:w-[50%]">
                    <h3 className="text-sm md:text-lg font-bold text-[#2b4174]">
                        <span className="text-[#fc7c7c] font-semibold">70%</span> Sale Off
                    </h3>
                    <h3 className="text-xl md:text-4xl font-playfair font-semibold">
                        Best Quality Products
                    </h3>
                    <button className="bg-[#fc7c7c] animated-button text-xs md:text-sm hover:animate-fade-slide-up transition-colors duration-300 px-4 md:px-5 py-2 w-[60%] md:w-[50%] rounded-xl font-medium">
                        <span>SHOP NOW</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sale;
