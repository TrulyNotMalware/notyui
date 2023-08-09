import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, useState } from 'react';
import Menu from './components/Menu/Menu';
import './default.scss';
import NotionPage from './components/Blog/Notion';

function App() {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />}>
            <Route path="notion" element={<NotionPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
