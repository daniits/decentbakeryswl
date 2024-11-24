import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Pages/Home/Home";

// Define your routes
const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
]);

function Root() {
  return <RouterProvider router={router} />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
