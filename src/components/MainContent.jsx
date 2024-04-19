import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Box } from "@chakra-ui/react";

const MainContent = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <a href="/inpainting" className="item1"></a>

        <a href="/deblurring" className="item2"></a>
        <a href="/denoising" className="item3"></a>
        <div className="item4"></div>
      </div>
    </div>
  );
};

export default MainContent;
