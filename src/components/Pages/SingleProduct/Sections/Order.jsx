import React, { useEffect, useState } from 'react';
import SvgIcon from '../../../../../public/images/Svgicon';
import { useCart } from '../../../Services/Context/CartContext'; 

const Order = ({ product }) => {
  const [count, setCount] = useState(1);
  const [topPic, setTopPic] = useState(product.productImages?.[0]);
  const { dispatch } = useCart();

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => Math.max(prevCount - 1, 1));

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: count,
      image: topPic,
    };
    console.log("Product Price in handleaddtocart:", product.price);


    // Dispatch the ADD_TO_CART action
    dispatch({ type: 'ADD_TO_CART', payload: cartItem });
    alert(`${product.name} added to cart!`);
  };

  const [favourites, setFavourites] = useState([]);

  // Load favourites from localStorage when the component mounts
  useEffect(() => {
    const storedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];
    setFavourites(storedFavourites);
  }, []);

  // Save favourites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);
  

  // const toggleFavourite = (productId) => {
  //   setFavourites((prevFavourites) =>
  //     prevFavourites.includes(productId)
  //       ? prevFavourites.filter((id) => id !== productId) // Remove from favourites
  //       : [...prevFavourites, productId] // Add to favourites
  //   );
  // };


  return (
    <div className="py-20 sm:px-5 lg:px-0">
      <div className="flex sm:flex-col lg:flex-row justify-center gap-5">
        <div className="flex sm:flex-col lg:flex-row bg-white sm:self-center lg:self-start sm:gap-0 lg:gap-2 sm:w-[100%] lg:w-[40%] sm:w-max-[300px] lg:max-w-[400px] h-full">
          <div className="flex items-center justify-center border-2 border-gray-300 w-full h-full">
            <img
              src={topPic}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex sm:flex-row lg:flex-col gap-2 mt-4 !h-[70%] max-h-[300px] self-center overflow-y-auto no-scrollbar">
            {product.productImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={product.name}
                className="w-16 h-16 object-cover cursor-pointer border-2"
                onClick={() => setTopPic(img)}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:gap-5 lg:gap-10 w-full h-full lg:w-[40%] bg-white items-start">
          <div className="flex flex-col justify-center gap-3">
            <h1 className="sm:text-lg lg:text-3xl font-bold text-gray-700 lg:text-left">
              {product.name}
            </h1>
            <h3 className="sm:text-lg lg:text-2xl font-bold">{product.price}</h3>
            <h6>****** (5 reviews)</h6>
          </div>
          <p>{product.details}</p>
          <div className="flex sm:gap-1 lg:gap-4">
            <div className="flex items-center gap-5 px-2 bg-blue text-white rounded">
              <button
                className="p-0"
                onClick={decrement}
                aria-label="Decrease count"
              >
                -
              </button>
              <h3 className="text-lg font-semibold">{count}</h3>
              <button
                className="p-0"
                onClick={increment}
                aria-label="Increase count"
              >
                +
              </button>
            </div>
            <button
              className="bg-blue hover:bg-pink text-white py-3 px-6 rounded-full font-semibold transition"
              onClick={handleAddToCart}
            >
              ADD TO CART
            </button>
            <button className="bg-blue hover:bg-pink p-4 rounded-full transition">
              <SvgIcon iconName="heartWhite" className="w-5 h-auto cursor-pointer" />
            </button>
            <button
            onClick={() => toggleFavourite(product.id)}
            className={favourites.includes(product.id) ? 'favourite' : ''}
          >
            {favourites.includes(product.id) ? 'Unfavourite' : 'Favourite'}
          </button>
          <h1>{product.id}</h1>
            <button className="bg-blue hover:bg-pink p-4 rounded-full transition">
              <SvgIcon iconName="searchWhite" className="w-5 h-auto cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
