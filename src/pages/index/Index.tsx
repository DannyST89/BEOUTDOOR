
import { Cards } from './components/Cards';
import Explore from './components/Explore';
import { Gallery } from './components/Gallery';
import { MainCarousel } from './components/MainCarousel'  
import ToursCarousel from './components/ToursCarousel';



export const Index = () => {
  return (
    <div>
      <MainCarousel />      
      <Explore />
      <Cards/>    
      {/* <ToursCarousel/> */}
      <ToursCarousel/>  
      <Gallery/>         
    </div>
  );
};
