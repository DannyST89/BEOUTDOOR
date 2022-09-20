import { BiDollar, BiMap, BiTimeFive } from "react-icons/bi";
import {frog06,
  mamal02,
  birds02,
  snakes01,
  insects02,
  mamal03,
  mamal01, 
  mamal05,
  frog07,
  frog03, 
  frog05,
  birds07, 
  birds08,
  insects04,
  birds04,
  birds06,
  rafting2, 
  tubing3,
  insects03,
  safari06,
  birds05,
  snakes03, 
  volcanArenal01,
  insects01,
  catarata_fortuna05,
  snakes02,
  hangingBridges01,
  rioCeleste04} from "../../../assets/images/Images";

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
      urlImage: frog06,
      title: 'Masked TreeFrog',
      description: 'Smilisca phaeota' ,
  }, {
      urlImage: mamal02,
      title: 'white-throated capuchin monkey',
      description: 'Cebus capucinus',
  }, {
      urlImage: birds02,
      title: 'Roadside hawk',
      description: 'rupornis magnirostris',
  }, {
      urlImage: snakes01,
      title: 'Eyelash Pitaviper',
      description: 'Bothriechis  schlegelii',
  }, {
      urlImage: insects02,
      title: 'Golden Orb Sider',
      description: 'nephila clavipes',
  }, {
    urlImage: mamal03,
    title: 'Brown-Throated tree-toed sloth',
    description: 'Bradypus variegatus',
  }
];
//Galeria de mamals
export const galleryMamals: GalleryProps[] = [
    {
        urlImage: mamal01,
        title: 'white nosed coati',
        description: 'nasua narica',
    },
    {
        urlImage: mamal02,
        title: 'white-throated capuchin monkey',
        description: 'Cebus capucinus',
    },
    {
        urlImage: mamal03,
        title: 'Brown-Throated tree-toed sloth',
        description: 'Bradypus variegatus',
    },
    {
      urlImage: mamal05,
      title: 'Alouatta Palliata',
      description: 'Mantled Howler Monkey',
  }
]; 
//Galeria de Frogs
export const galleryFrogs: GalleryProps[] = [
  {
      urlImage: frog07,
      title: 'ghost glass frog',
      description: 'sachatamia ilex',
  },
  {
      urlImage: frog06,
      title: 'Masked TreeFrog',
      description: 'Smilisca phaeota' ,
  },  
  {
      urlImage: frog03,
      title: 'brown foam frog',
      description: "leptodactylus poecilochilus",
  },
  {
    urlImage: frog05,
    title: 'Red-eyed Leaf frog',
    description: 'Agalychnis callidryas',
  },
]; 
//Galeria de birds
export const galleryBirds: GalleryProps[] = [
  {
      urlImage: birds07,
      title: 'crested caracara',
      description: 'Caracara cheriway',
  },
  {
      urlImage: birds02,
      title: 'Roadside hawk',
      description: 'rupornis magnirostris',
  },
  {
      urlImage: birds08,
      title: 'masked tityra',
      description: 'tityra semifasciata',
  },
  {
    urlImage: birds04,
    title: 'agami heron',
    description: 'agamia agamia',
  },
  {
    urlImage: birds06,
    title: 'Staly-tailed trogon',
    description: 'Trogon massena',
  },
  {
    urlImage: birds05,
    title: 'golden-hooded tanager',
    description: 'tangara larvata',
  },
]; 
//Galeria de Snakes
export const gallerySnakes: GalleryProps[] = [
    {
        urlImage: snakes01,
        title: 'Eyelash Pitaviper',
        description: 'Bothriechis  schlegelii',
    }, {
        urlImage: snakes02,
        title: 'Tiger Rat Snake',
        description: 'Spilotes pullatus',
    }, {
        urlImage: snakes03,
        title: 'Cloudy Snail-eater',
        description: 'Sibon nebulatus',
    }
];
//Galeria de birds
export const galleryInsects: GalleryProps[] = [
  {
      urlImage: insects01,
      title: 'katydid',
      description: 'Pterophylla camellifolia',
  },
   {
      urlImage: insects02,
      title: 'Golden Orb Sider',
      description: 'nephila clavipes',
  },
   {
      urlImage: insects03,
      title: '',
      description: '',
  },  
  {
    urlImage: insects04,
    title: 'Praying Mantis',
    description: 'stagmomantis carolina',
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
      urlImage: volcanArenal01,
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
      urlImage: rioCeleste04,
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
      urlImage: hangingBridges01,
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
      urlImage: catarata_fortuna05,
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
      urlImage: safari06,
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
      urlImage: rafting2,
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
      urlImage: tubing3,
      hoursIcon: <BiTimeFive style={{ color: "#FEC01B", fontSize: "1.5rem" }} />,
      hours: " 6 hours",
      placeIcon: <BiMap style={{ color: "#FEC01B", fontSize: "1.5rem" }} />,
      place: " Katira",
    },
  ];