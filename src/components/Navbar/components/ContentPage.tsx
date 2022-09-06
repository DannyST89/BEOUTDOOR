import { 
    Routes,
    Route, 
} from 'react-router-dom';

import { ContactUs } from '../../../pages/contactUs/ContactUs';
import { House } from '../../../pages/House/House';
import { Index } from '../../../pages/index/Index';
import { Tours } from '../../Tour/Tours';

export const ContentPage = () => {
  return (
    <Routes>
      <Route path="BEOUTDOOR" element={<Index />} />
       <Route path="BEOUTDOOR/ContactUs/:tour" element={<ContactUs />} />
      <Route path="BEOUTDOOR/House" element={<House />} />

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
