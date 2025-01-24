import React from 'react'

const Category2 = () => {
    const products = [
        { img: "/images/image/product1.png", name: "BREAKFAST", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", },
        { img: "/images/image/product2.png", name: "PASTRY", details: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", },
        { img: "/images/image/product3.png", name: "COFFEE CAKE", details: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.", },
        { img: "/images/image/product4.png", name: "BAKE TOAST", details: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.", },
    ];
    return (
        <div>
            <div className="flex sm:flex-col lg:flex-row lg:gap-16 sm:px-2 lg:px-32 py-20 justify-center">
                {products.map((product, i) => (
                    <div key={i} className="text-center sm:w-full lg:w-[20%] relative flex flex-col items-center">
                        <img src={product.img} alt="" />
                        <h3 className="text-3xl font-playfair font-medium">{product.name}</h3>
                        <p>{product.details}</p>

                        {/* Vertical Divider */}
                        {i < products.length - 1 && (
                            <div className="sm:hidden md:block absolute right-[-16px] top-[50%] translate-y-[-50%] h-[50%] w-[1px] bg-gray-300 flex flex-col">
                                {/* Colored Portion */}
                                <div
                                    className={`h-6 bg-pink ${i === 0 ? "mt-0" : i === products.length - 3 ? "mt-auto" : "mt-[50%] -translate-y-[50%]"
                                        }`}
                                ></div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>


    )
}

export default Category2
