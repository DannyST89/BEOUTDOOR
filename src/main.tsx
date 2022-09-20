
import React, { Suspense, lazy } from 'react'

import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
//import { ContentPage } from './components/Navbar/components/ContentPage';
import { Navbar } from './components/Navbar/Navbar';
import "./styles/_main.scss";
import 'animate.css';

const ContentPage = lazy<any>(() => import('./components/Navbar/components/ContentPage'));

const loading = (
  <div id='Loading'>
    <div className='loader'></div>
    <div className='loader2'></div>
  </div>
)



  //para que no muestre el error de que "no use el StrictMode "
  ; (() => {
    const oldLogError = console.error
    console.error = function (...args) {
      if (typeof args[0] !== 'string' || args[0].indexOf('is deprecated in StrictMode') === -1) {
        oldLogError.apply(console, args)
      }
    }
  })()

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter >

      {/* Navegacion */}
      <Navbar />

      {/* Contenido */}
      <Suspense fallback={<div className='cargadoTotalContenido'>{loading}</div>}>
        <ContentPage />
      </Suspense>

      {/* Footer */}
      <Footer />

    </BrowserRouter>
  </React.StrictMode>
);

