
import React from 'react'
import DescriptionCard from '../House/components/DescriptionCard';
import { GoogleMap } from '../House/components/GoogleMap';
import { Cards } from './components/Cards';
import Explore from './components/Explore';
import { MainCarousel } from './components/MainCarousel'  
import ToursCarousel from './components/ToursCarousel';



export const Index = () => {
  return (
    <div>
      <MainCarousel />
      <Explore />
      <Cards/>    
      <ToursCarousel/>
      <DescriptionCard/>
     <GoogleMap />
    </div>
  );
};
