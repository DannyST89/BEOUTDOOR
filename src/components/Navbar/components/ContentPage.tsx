import { 
    Routes,
    Route, 
} from 'react-router-dom';
import { ContactUs } from '../../../pages/contactUs/ContactUs';
import { House } from '../../../pages/House/House';
import { Index } from '../../../pages/index/Index';
export const ContentPage = () => {
  return (
    <Routes>
       <Route path="/" element={<Index />} /> 
       <Route path="/ContactUs" element={<ContactUs />} />
       <Route path="/House" element={<House />} />
       <Route path="/" element={<Index />} />
    </Routes>
  )
}
