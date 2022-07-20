import React from 'react'
import ReactDOM from 'react-dom/client' 
import { Navbar } from './components/Navbar/Navbar';
import "./styles/_main.scss"; 
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <Navbar />
  // {/* </React.StrictMode> */}
)
