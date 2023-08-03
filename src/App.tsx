import { BrowserRouter } from 'react-router-dom';
import { Suspense, useState } from 'react';

function App() {
  return (
    <Suspense fallback={null}>
      <BrowserRouter></BrowserRouter>
    </Suspense>
  );
}

export default App;
