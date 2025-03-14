import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css';

import Index from './pages/index';
import Buttons from './pages/buttons';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/buttons" element={<Buttons />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
