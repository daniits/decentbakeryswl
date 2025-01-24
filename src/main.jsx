import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import './index.css'
import router from "./components/Routes/Routes";
import App from "./App";
import { CartProvider } from "./components/Services/Context/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider  >
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </CartProvider>
  </React.StrictMode>
);
