import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css';

import Index from './pages/index';
import Buttons from './pages/buttons';
import Typography from './pages/typography';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/buttons" element={<Buttons />} />
        <Route path="/typography" element={<Typography />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
