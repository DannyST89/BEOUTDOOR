import {
  Routes,
  Route,
} from 'react-router-dom';
import { About } from '../../../pages/About/About';
import { ContactUs } from '../../../pages/contactUs/ContactUs';
import { House } from '../../../pages/House/House';
import { Index } from '../../../pages/index/Index';
import { Tours } from '../../Tour/Tours';
import { NotFound } from '../../NotFound/NotFound';
 
const ContentPage = () => {

  return (
    <Routes>
      <Route path="/" element={<Index />} />

      <Route path="ContactUs" element={<ContactUs />} >
        <Route path=":tour" element={<ContactUs />} />
      </Route>


      <Route path="House" element={<House />} />

      <Route path="About" element={<About />} />

      {/* adventures */}
      <Route path="Rafting" element={<Tours />} />
      <Route path="Safari" element={<Tours />} />

      {/* hikings */}
      <Route path="RioCeleste" element={<Tours />} />
      <Route path="ArenalVolcano" element={<Tours />} />
      <Route path="FortunaWaterfall" element={<Tours />} />
      <Route path="HangingBridges" element={<Tours />} />
      <Route path="CombinationTours" element={<Tours />} />
      <Route path="*" element={<NotFound />} />
      
    </Routes>
  )
}


export default ContentPage;