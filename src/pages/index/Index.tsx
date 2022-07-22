
import React from 'react'
import { Cards } from './components/Cards';
import { MainCarousel } from './components/MainCarousel'  
import ToursCarousel from './components/ToursCarousel';


export const Index = () => {
  return (
    <div>
      <MainCarousel />
      <Cards/>
      <ToursCarousel/>
    </div>
  );
};
