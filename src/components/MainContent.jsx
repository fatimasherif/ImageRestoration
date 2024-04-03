import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Box } from '@chakra-ui/react';

const MainContent = () => {
  return (
    <div>
      <Navbar/>
      <div className="container">
      <div className="item1">1</div>
      <div className="item2">2</div>
      <div className="item3">3</div>
      <div className="item4">4</div>
    </div>
    </div>
  );
}

export default MainContent;
