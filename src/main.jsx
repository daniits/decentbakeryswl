import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
// import router from "./router";
import './index.css'
import router from "./components/Routes/Routes";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <ChakraProvider> */}
      <RouterProvider router={router} />
    {/* </ChakraProvider> */}
  </React.StrictMode>
);
