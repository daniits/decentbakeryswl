import React, { createContext, useReducer, useContext, useEffect } from "react";

// Initial state (try to load from localStorage first)
const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  totalPrice: JSON.parse(localStorage.getItem("totalPrice")) || 0,
};

// Reducer function to handle cart actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingProductIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      let updatedCart;
      if (existingProductIndex !== -1) {
        updatedCart = state.cart.map((item, index) =>
          index === existingProductIndex
            ? {
                ...item,
                quantity: item.quantity + (action.payload.quantity || 1),
              }
            : item
        );
      } else {
        const newItem = {
          ...action.payload,
          price: action.payload.price, // Ensure price is a number
          quantity: action.payload.quantity, // Ensure quantity is a number
        };
        updatedCart = [...state.cart, newItem];
      }

      return {
        ...state,
        cart: updatedCart,
        totalPrice: calculateTotalPrice(updatedCart),
      };
    }

    case "REMOVE_FROM_CART": {
      const updatedCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        cart: updatedCart,
        totalPrice: calculateTotalPrice(updatedCart),
      };
    }

    case "UPDATE_QUANTITY": {
      const updatedCart = state.cart.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      return {
        ...state,
        cart: updatedCart,
        totalPrice: calculateTotalPrice(updatedCart),
      };
    }

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
        totalPrice: 0,
      };

    default:
      return state;
  }
};

// Function to calculate total price
const calculateTotalPrice = (cart) => {
  return cart.reduce((total, item) => {
    const price = parseFloat(item.price) || 0;
    const quantity = parseInt(item.quantity, 10) || 0;
    return total + price * quantity;
  }, 0);
};

// Create the context
const CartContext = createContext();

// Cart Provider Component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Store cart and totalPrice in localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
    localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
  }, [state.cart, state.totalPrice]);

  return (
    <CartContext.Provider value={{ cart: state.cart, totalPrice: state.totalPrice, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use CartContext
export const useCart = () => useContext(CartContext);
