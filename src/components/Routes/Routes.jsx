import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Contact from "../Pages/Contact/Contact";
import Cart from "../Pages/Cart/Cart";
import App from "../../App"; 
import Checkout from "../Pages/Checkout/Checkout";
import AdminPanel from "../Auth/Admin/AdminPanel";
import Favourite from "../Pages/Favourite/Favourite";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App>
      <Home />
      </App>,
  },
  {
    path: "/admin",
    element: <AdminPanel />,
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
    path: "/cart",
    element: <App><Cart /></App>,
  },
  {
    path: "/favourite",
    element: <App><Favourite /></App>,
  },
  {
    path: "/checkout",
    element: <App><Checkout /></App>,
  },
]);

export default router;
