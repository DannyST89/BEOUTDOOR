

import React from 'react' 
import { BrowserRouter } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import ContentPage from './components/Navbar/components/ContentPage';
import { Navbar } from './components/Navbar/Navbar';  


function App() {
   

  return (
    <React.StrictMode>
    <BrowserRouter >

      {/* Navegacion */}
      <Navbar />

      {/* Contenido */}
      <ContentPage /> 

      {/* Footer */} 
      <Footer />

    </BrowserRouter>
  </React.StrictMode>
  );
}

export default App;
