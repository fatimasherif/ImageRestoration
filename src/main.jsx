import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/root";
import ErrorPage from "./error-page";
import MainContent from "./components/MainContent.jsx";
import Deblurring from "./pages/deblurring.jsx";
import Denoising from "./pages/denoising.jsx";
import Inpainting from "./pages/inpainting.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    eerrorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <MainContent />,
    eerrorElement: <ErrorPage />,
  },
  {
    path: "/denoising",
    element: <Denoising />,
    eerrorElement: <ErrorPage />,
  },
  {
    path: "/deblurring",
    element: <Deblurring />,
    eerrorElement: <ErrorPage />,
  },
  {
    path: "/inpainting",
    element: <Inpainting />,
    eerrorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <React.StrictMode>
      {/* <Home/> */}
      <RouterProvider router={router} />
    </React.StrictMode>
    ,
  </ChakraProvider>
);
