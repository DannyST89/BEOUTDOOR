import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
  BrowserRouter,
  Routes,
  Route,
 } from 'react-router-dom';
import App from './App'
import 'src\styles\_main.scss';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
    </Routes>
  </BrowserRouter>
)
