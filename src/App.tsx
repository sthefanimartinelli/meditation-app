/* eslint-disable @typescript-eslint/no-shadow */
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SearchProvider from './context/SearchProvider';

function App() {
  return (
    <SearchProvider>
      <main>
        <Routes>
          <Route path="/" element={ <Home /> } />
        </Routes>
      </main>
    </SearchProvider>
  );
}

export default App;
