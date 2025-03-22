import React, { useEffect, useState } from 'react'
// import { products } from '../../Services/data/data';

const Favourite = () => {
    const [favourites, setFavourites] = useState([]); 
  useEffect(() => {
    const storedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];
    setFavourites(storedFavourites);
  }, []);

  const favouriteProducts = products.filter((product) =>
    favourites.includes(product.id)
  );
console.log(favouriteProducts)

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">My Favourites</h1>

      {/* {favouriteProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favouriteProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-700">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mt-2">{product.details}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-800">
                    ${product.price}
                  </span>
                  <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 text-lg">
          You haven't added any favourites yet!
        </p>
      )} */}
    </div>
  )
}

export default Favourite
