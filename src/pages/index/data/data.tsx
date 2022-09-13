


//---------------------------------------------------------Informacion de la galeria------------------------------------------------------

import React from "react";

//esto es para cargar la nevegacion de la galeria de imagenes
export const navGallery = ['All', 'Lizard', 'Snake']

//los types para cargar las imagnes y su informacion
export type GalleryProps = {
    urlImage: string,
    title: string,
    description: string,
    openModal?: (url: string) => void
}

//las zonas de la galeria
export const galleryLizard: GalleryProps[] = [
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

export const gallerySnake: GalleryProps[] = [
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