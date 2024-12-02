import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Contact from "../Pages/Contact/Contact";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default router;
