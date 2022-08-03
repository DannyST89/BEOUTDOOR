
import React from 'react'
import { Formulario } from '../contactUs/components/Formulario';
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
    </div>
  );
};
