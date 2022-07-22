
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { ContentPage } from './components/Navbar/components/ContentPage';
import { Navbar } from './components/Navbar/Navbar';
import { Index } from './pages/index/Index';
import "./styles/_main.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>

      {/* Navegacion */}
      <Navbar />

      {/* Contenido */}
      <ContentPage /> 

      {/* Footer */} 
      <Footer />
       

    </BrowserRouter>
  </React.StrictMode>
);

