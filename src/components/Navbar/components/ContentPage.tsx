import { 
    Routes,
    Route, 
} from 'react-router-dom';
import { useEffect, useState } from 'react'
import { About } from '../../../pages/About/About';
import { ContactUs } from '../../../pages/contactUs/ContactUs';
import { House } from '../../../pages/House/House';
import { Index } from '../../../pages/index/Index';
import { Tours } from '../../Tour/Tours';
import { dataTours } from '../../Tour/data';

type tour = {
  backgroundImg?: string,
  tituloPrincipalImg?: string,
  tituloSecondarioImg?: string,
  tituloPrincipal?: string,
  textoPrincipal?: string[],
  tituloCards?: string,
  titleLeft?: string,
  textTitleLeft?: string,
  textleft?: string[],
  titleRight?: string,
  hour?: string,
  description?: string,
  time?: string,
  price?: string,
  shop?: string,
  bibliotecaImg?: string[]
}

export const ContentPage = () => { 

  return (
    <Routes>
      <Route path="BEOUTDOOR" element={<Index />} />
       <Route path="BEOUTDOOR/ContactUs" element={<ContactUs />} >
        <Route path=":tour" element={<ContactUs />} />
       </Route>
      <Route path="BEOUTDOOR/House" element={<House/>} />
      
      <Route path="BEOUTDOOR/About" element={<About/>} />
      
	    {/* adventures */}
      <Route path="BEOUTDOOR/Rafting" element={<Tours/>} />
      <Route path="BEOUTDOOR/Safari" element={<Tours/>} />

      {/* hikings */}
      <Route path="BEOUTDOOR/RioCeleste" element={<Tours/>} />
      <Route path="BEOUTDOOR/ArenalVolcano" element={<Tours/>} />
      <Route path="BEOUTDOOR/FortunaWaterfall" element={<Tours/>} />
      <Route path="BEOUTDOOR/HangingBridges" element={<Tours/>} />
      <Route path="BEOUTDOOR/CombinationTours" element={<Tours/>} /> 
    </Routes>
  )
}
