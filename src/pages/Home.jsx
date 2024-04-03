import React from 'react'
import MainContent from '../components/MainContent.jsx'
import Navbar from '../components/Navbar/Navbar.tsx'
import robot from '../assets/Images/robot.png'
const Home = () => {
  return (
    <div className='home-container'>

<h1 className='welcome-text' >Welcome to Image Restoration here you can</h1>
<h1 className='welcome-text-p2'><span> Inpaint</span> your Image</h1>
<a href="dashboard" className="glow-button">Lets Start ! </a>
<img className='robot-image' src={robot} alt="Description of the image" />  
      {/* <h1>Home</h1> */}
        {/* <MainContent/> */}
        {/* <Navbar/> */}
    </div>
  )
}

export default Home