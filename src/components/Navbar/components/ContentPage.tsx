import {
  Routes,
  Route,
} from 'react-router-dom';
import { About } from '../../../pages/About/About';
import { ContactUs } from '../../../pages/contactUs/ContactUs';
import { House } from '../../../pages/House/House';
import { Index } from '../../../pages/index/Index';
export const ContentPage = () => {
  return (
    <Routes>
      <Route path="BEOUTDOOR" element={<Index />} />
      <Route path="BEOUTDOOR/ContactUs" element={<ContactUs />} />
      <Route path="BEOUTDOOR/House" element={<House />} />
      <Route path="BEOUTDOOR/About" element={<About />} />
    </Routes>
  )
}
