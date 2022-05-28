import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import App from './pages/App';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<App />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);
