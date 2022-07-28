import { 
    Routes,
    Route, 
} from 'react-router-dom';
import { Index } from '../../../pages/index/Index';
export const ContentPage = () => {
  return (
    <Routes>
       <Route path="/" element={<Index />} /> 
    </Routes>
  )
}
