import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, useState } from 'react';
import Menu from './components/Menu/Menu';
import './default.scss';

function App() {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
