/* eslint-disable @typescript-eslint/no-shadow */
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Search from './pages/Search';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/search" element={ <Search /> } />
      </Routes>
    </main>
  );
}

export default App;
