import React from 'react';
/*
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
*/
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import HomePage from './pages/HomePage';
import MenuH from './components/MenuH';
import CvPage from './pages/CvPage';

function App() {
  return (
    <BrowserRouter basename='/'>
      <MenuH />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/cvpage" element={<CvPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;
