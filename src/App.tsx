import React, { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'https://picsum.photos/id/123/1200/400',
    altText: 'Slide 1', 
    key: 1
  },
  {
    src: 'https://picsum.photos/id/456/1200/400',
    altText: 'Slide 2', 
    key: 2
  },
  {
    src: 'https://picsum.photos/id/678/1200/400',
    altText: 'Slide 3', 
    key: 3
  }
];







function App(args: any) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex: number) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }
  
  const slides = items.map((item) => {
    return (
       <CarouselItem key={item.src}>

         <img src={item.src}   /> 
       </CarouselItem>
      
    );
  });
   


  return (
    <h1>PaginaPrincipal</h1>
  );
}

export default App;
