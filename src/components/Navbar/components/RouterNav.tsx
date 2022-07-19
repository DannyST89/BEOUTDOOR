import { 
    Routes,
    Route, 
} from 'react-router-dom';
import App from '../../../App';
export const RouterNav = () => {
  return (
    <Routes>
       <Route path="/" element={<App />} />
    </Routes>
  )
}
