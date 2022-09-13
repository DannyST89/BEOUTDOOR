
import { Cards } from './components/Cards';
import Explore from './components/Explore';
import { FrequentlyAskedQuestions } from './components/FrequentlyAskedQuestions';
import { Gallery } from './components/Gallery';
import { Hero } from './components/Hero'  
import ToursCarousel from './components/ToursCarousel';



export const Index = () => {
  return (
    <div>
      <Hero />      
      <Explore />
      <Cards/>     
      <ToursCarousel/>  
      <Gallery/>         
      <FrequentlyAskedQuestions/>         
    </div>
  );
};
