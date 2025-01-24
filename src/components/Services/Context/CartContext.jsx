import React, { createContext, useReducer, useContext } from 'react';

// Initial state
const initialState = {
  cart: [],
};

// Reducer function to handle cart actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      console.log("Payload received:", action.payload);

      const existingProductIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingProductIndex !== -1) {
        const updatedCart = state.cart.map((item, index) =>
          index === existingProductIndex
            ? {
                ...item,
                quantity: item.quantity + (action.payload.quantity || 1),
              }
            : item
        );
        // console.log("Updated Cart:", updatedCart);
        return {
          ...state,
          cart: updatedCart,
          totalPrice: calculateTotalPrice(updatedCart), // Update total price
        }
      };
      
      const newItem = {
        ...action.payload,
        price: (action.payload.price) , // Ensure price is a number
        quantity: (action.payload.quantity), // Ensure quantity is a number
      };

      const updatedCart = [...state.cart, newItem];
      console.log("Updated Cart:", updatedCart)
      return {
        ...state,
        cart: updatedCart,
        totalPrice: calculateTotalPrice(updatedCart), // Update total price
      };
    }

    case "REMOVE_FROM_CART": {
      const updatedCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        cart: updatedCart,
        totalPrice: calculateTotalPrice(updatedCart), // Update total price
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
        totalPrice: calculateTotalPrice(updatedCart), // Update total price
      };
    }

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
        totalPrice: 0, // Reset total price
      };

    default:
      return state;
  }
};


// Ensure proper calculation of total price
const calculateTotalPrice = (cart) => {
  return cart.reduce((total, item) => {
    const price = parseFloat(item.price) || 0; // Ensure price is a valid number
    const quantity = parseInt(item.quantity, 10) || 0; // Ensure quantity is a valid number
    return total + price * quantity;
  }, 0);
};




// Create the context
const CartContext = createContext();

// Cart Provider Component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cart: state.cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use CartContext
export const useCart = () => useContext(CartContext);
