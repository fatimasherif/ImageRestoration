import React from "react";
import "../../src/App.css";
import MainContent from "../components/MainContent.jsx";
import Navbar from "../components/Navbar/Navbar.tsx";
import robot from "../assets/Images/robot.png";

function Home() {
  return (
    <div className="home-container">
      <h1 className="welcome-text">
        Welcome to Image Restoration here you can
      </h1>
      <h1 className="welcome-text-p2">
        <span> Inpaint</span> your Image
      </h1>
      <div className="link-container">
        <a href="deblurring" className="link">
          Deblurr
        </a>
        <a href="denoising" className="link">
          Denoise{" "}
        </a>
        <a href="inpainting" className="link">
          Inpaint
        </a>
      </div>

      <img className="robot-image" src={robot} alt="Description of the image" />
      {/* <h1>Home</h1> */}
      {/* <MainContent/> */}
      {/* <Navbar/> */}
    </div>
  );
}

export default Home;
