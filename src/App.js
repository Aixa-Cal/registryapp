
import React from 'react';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Home from './routes/Home';
import Registry from './routes/Registry';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Home />} />
    
        <Route path='/registry'  element={<Registry />} />
 
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
