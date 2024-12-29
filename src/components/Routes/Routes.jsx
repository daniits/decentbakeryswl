import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Contact from "../Pages/Contact/Contact";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";
import Cart from "../Pages/Cart/Cart";
import App from "../../App"; 
import Checkout from "../Pages/Checkout/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App>
      <Home />
      </App>,
  },
  {
    path: "/home",
    element: <App><Home /></App>,
  },
  {
    path: "/shop",
    element: <App><Shop /></App>,
  },
  {
    path: "/about",
    element: <App><AboutUs /></App>,
  },
  {
    path: "/contact",
    element: <App><Contact /></App>,
  },
  {
    path: "/product/:productId",
    element: <App><SingleProduct /></App>,
  },
  {
    path: "/cart/:productId",
    element: <App><Cart /></App>,
  },
  {
    path: "/checkout",
    element: <App><Checkout /></App>,
  },
]);

export default router;
