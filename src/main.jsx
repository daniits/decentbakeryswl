import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import './index.css'
import router from "./components/Routes/Routes";
import App from "./App";
import { CartProvider } from "./components/Services/Context/CartContext";
import { ShopProvider } from "./components/Services/Context/Shop/ShopProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShopProvider>
    <CartProvider  >
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </CartProvider>
    </ShopProvider>
  </React.StrictMode>
);
