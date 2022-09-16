import { BiDollar, BiMap, BiTimeFive } from "react-icons/bi";
import { BsArrowRightShort } from "react-icons/bs";

import * as images from "../../../assets/images/Images";

//---------------------------------------------------------Informacion de la galeria------------------------------------------------------
 
//esto es para cargar la nevegacion de la galeria de imagenes
export const navGallery = ['All', 'Mamals', 'Frogs','Birds','Snakes','Insects']

//los types para cargar las imagnes y su informacion
export type GalleryProps = {
    urlImage: string,
    title: string,
    description: string,
    openModal?: (url: string) => void
}

//las zonas de la galeria
//Galeria de All
export const galleryAll: GalleryProps[] = [
  {
      urlImage: 'https://source.unsplash.com/random/1',
      title: 'Title',
      description: 'description',
  }, {
      urlImage: 'https://source.unsplash.com/random/2',
      title: 'Title',
      description: 'description',
  }, {
      urlImage: 'https://source.unsplash.com/random/3',
      title: 'title',
      description: 'description',
  }, {
      urlImage: 'https://source.unsplash.com/random/4',
      title: 'Title',
      description: 'description',
  }, {
      urlImage: 'https://source.unsplash.com/random/5',
      title: 'Title',
      description: 'description',
  }, {
      urlImage: 'https://source.unsplash.com/random/6',
      title: 'title',
      description: 'description',
  }
];
//Galeria de mamals
export const galleryMamals: GalleryProps[] = [
    {
        urlImage: 'https://source.unsplash.com/random/4',
        title: 'Title',
        description: 'description',
    }, {
        urlImage: 'https://source.unsplash.com/random/5',
        title: 'Title',
        description: 'description',
    }, {
        urlImage: 'https://source.unsplash.com/random/6',
        title: 'title',
        description: 'description',
    }
]; 
//Galeria de Frogs
export const galleryFrogs: GalleryProps[] = [
  {
      urlImage: 'https://source.unsplash.com/random/4',
      title: 'Title',
      description: 'description',
  }, {
      urlImage: 'https://source.unsplash.com/random/5',
      title: 'Title',
      description: 'description',
  }, {
      urlImage: 'https://source.unsplash.com/random/6',
      title: 'title',
      description: 'description',
  }
]; 
//Galeria de birds
export const galleryBirds: GalleryProps[] = [
  {
      urlImage: 'https://source.unsplash.com/random/4',
      title: 'Title',
      description: 'description',
  }, {
      urlImage: 'https://source.unsplash.com/random/5',
      title: 'Title',
      description: 'description',
  }, {
      urlImage: 'https://source.unsplash.com/random/6',
      title: 'title',
      description: 'description',
  }
]; 
//Galeria de Snakes
export const gallerySnakes: GalleryProps[] = [
    {
        urlImage: 'https://source.unsplash.com/random/1',
        title: 'Title',
        description: 'description',
    }, {
        urlImage: 'https://source.unsplash.com/random/2',
        title: 'Title',
        description: 'description',
    }, {
        urlImage: 'https://source.unsplash.com/random/3',
        title: 'title',
        description: 'description',
    }
];
//Galeria de birds
export const galleryInsects: GalleryProps[] = [
  {
      urlImage: 'https://source.unsplash.com/random/4',
      title: 'Title',
      description: 'description',
  }, {
      urlImage: 'https://source.unsplash.com/random/5',
      title: 'Title',
      description: 'description',
  }, {
      urlImage: 'https://source.unsplash.com/random/6',
      title: 'title',
      description: 'description',
  }
]; 


//--------------------------------------Componenten Frecuently questions------------------------------
export type accordionProps = {
    question: string,
    answer: string,
}

export const  frequentlyAsked: accordionProps[]  = [
    {
      question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, explicabo?.",
      answer: ` Placeholder content for this accordion, which is intended to
      demonstrate the class. This is the
      first item's accordion body.`
  
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, explicabo?.",
      answer: ` Placeholder content for this accordion, which is intended to
      demonstrate the class. This is the
      first item's accordion body.`
  
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, explicabo?.",
      answer: ` Placeholder content for this accordion, which is intended to
      demonstrate the class. This is the
      first item's accordion body.`
  
    },
  ]




  export const sliderData = [
    {
      id: 1,
      title: "Arenal Volcano",
      price: " 65",
      info: "You want to learn about volcanoes, this tour has it all",
      dollarIcon: <BiDollar style={{ color: "#FEC01B", fontSize: "1.5rem" }} />,
      urlImage: images.volcanArenal01,
      hoursIcon: <BiTimeFive style={{ color: "#FEC01B", fontSize: "1.5rem" }} />,
      hours: " 4 hours",
      placeIcon: <BiMap style={{ color: "#FEC01B", fontSize: "1.5rem" }} />,
      place: " La Fortuna",
    },
    {
      id: 2,
      title: "Rio Celeste",
      price: " 90",
      info: "Celestial waterfall and magic ligth blue river, it is a walk for those who love good walking",
      dollarIcon: <BiDollar style={{ color: "#FEC01B", fontSize: "1.5rem" }} />,
      urlImage: images.rioCeleste04,
      hoursIcon: <BiTimeFive style={{ color: "#FEC01B", fontSize: "1.5rem" }} />,
      hours: " 8 hours",
      placeIcon: <BiMap style={{ color: "#FEC01B", fontSize: "1.5rem" }} />,
      place: " Katira",
    },
    {
      id: 3,
      title: "Hanging Bridges",
      price: " 70",
      info: "Feel that you can touch the clouds from the highest",
      dollarIcon: <BiDollar style={{ color: "#FEC01B", fontSize: "1.5rem" }} />,
      urlImage: images.hangingBridges01,
      hoursIcon: <BiTimeFive style={{ color: "#FEC01B", fontSize: "1.5rem" }} />,
      hours: " 4 hours",
      placeIcon: <BiMap style={{ color: "#FEC01B", fontSize: "1.5rem" }} />,
      place: " La Fortuna",
    },
    {
      id: 4,
      title: "Fortuna Waterfall",
      price: " 40",
      info: "Get to know one of the most spectacular waterfalls in the territory of Costa Rica",
      dollarIcon: <BiDollar style={{ color: "#FEC01B", fontSize: "1.5rem" }} />,
      urlImage: images.catarata_fortuna05,
      hoursIcon: <BiTimeFive style={{ color: "#FEC01B", fontSize: "1.5rem" }} />,
      hours: " 3 hours",
      placeIcon: <BiMap style={{ color: "#FEC01B", fontSize: "1.5rem" }} />,
      place: " La Fortuna",
    },
    {
      id: 5,
      title: "Safari Float and Wild Life Arenal",
      price: " 65",
      info: "For those who love a pleasant and quiet trip",
      dollarIcon: <BiDollar style={{ color: "#FEC01B", fontSize: "1.5rem" }} />,
      urlImage: images.safari06,
      hoursIcon: <BiTimeFive style={{ color: "#FEC01B", fontSize: "1.5rem" }} />,
      hours: " 4 hours",
      placeIcon: <BiMap style={{ color: "#FEC01B", fontSize: "1.5rem" }} />,
      place: " La Fortuna",
    },
    {
      id: 6,
      title: "Rafting",
      price: " 75",
      info: "Adventure and nature are ideally combined, don't you think? ",
      dollarIcon: <BiDollar style={{ color: "#FEC01B", fontSize: "1.5rem" }} />,
      urlImage: images.rafting2,
      hoursIcon: <BiTimeFive style={{ color: "#FEC01B", fontSize: "1.5rem" }} />,
      hours: " 6 hours",
      placeIcon: <BiMap style={{ color: "#FEC01B", fontSize: "1.5rem" }} />,
      place: " La Fortuna",
    },
    {
      id: 6,
      title: "Tubing Rio Celeste",
      price: " 130",
      info: "This is  a different way for those who like to live different and unforgettable experiences all in one day",
      dollarIcon: <BiDollar style={{ color: "#FEC01B", fontSize: "1.5rem" }} />,
      urlImage: images.tubing3,
      hoursIcon: <BiTimeFive style={{ color: "#FEC01B", fontSize: "1.5rem" }} />,
      hours: " 6 hours",
      placeIcon: <BiMap style={{ color: "#FEC01B", fontSize: "1.5rem" }} />,
      place: " Katira",
    },
  ];