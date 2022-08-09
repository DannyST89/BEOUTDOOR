import { 
    Routes,
    Route, 
} from 'react-router-dom';
import { ContactUs } from '../../../pages/contactUs/ContactUs';
import { Index } from '../../../pages/index/Index';
export const ContentPage = () => {
  return (
    <Routes>
       <Route path="/ContactUs" element={<ContactUs />} />
       <Route path="/" element={<Index />} />
    </Routes>
  )
}
