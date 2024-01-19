import { Box } from '@chakra-ui/react';
import React from 'react';
import backgroundImage from '../Image/homeBG.jpg';
import ImageCarousel from '../Components/Carousel';
import { FooterSection } from '../Components/Footer';
import PopularPlaces from '../Components/PopularPlaces';

const Homepage = () => {
  return (
    <Box>
      <Box
        className='home'
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          height: '95vh',
        }}
      ></Box>
       <Box>
        <PopularPlaces />
      </Box>
      <Box>
        <ImageCarousel />
      </Box>
      <Box>
        <FooterSection />
      </Box>
    </Box>
  );
};

export default Homepage;
