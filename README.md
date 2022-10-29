# react-app-linkedin

## jsr029 presents a react redux app training for linkedin posts

# 1. Create a loading page with react and sass

a. Install react redux template by following instructions below

<img src="https://github.com/jsr029/react-app-linkedin/blob/master/images/redux-install.JPG" alt="Install react redux" />

b. Prepare for navigation

a.1. Replace lines in App.js by :

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
