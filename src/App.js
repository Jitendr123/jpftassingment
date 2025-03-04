
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import { DarkModeProvider } from './context/DarkModeContext';


function App() {
  return (
    <div>
      <DarkModeProvider>

        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="*" element={<Home />}></Route>

        </Routes>
      </DarkModeProvider>



    </div>

  );
}

export default App;