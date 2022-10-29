# react-app-linkedin

## jsr029 presents a react redux app training for linkedin posts

# 1. Create a loading page with react and sass

1.1. Install react redux template by following instructions below

<img src="https://github.com/jsr029/react-app-linkedin/blob/master/images/redux-install.JPG" alt="Install react redux" />

1.2. Prepare for navigation

a. Replace lines in App.js by :

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

b. It looks like this :

<img src="https://github.com/jsr029/react-app-linkedin/blob/master/images/navigation.JPG" alt="Navigation sreen" />

1.3. Prepare Sass

a. Insert sass line in package.json 

<img src="https://github.com/jsr029/react-app-linkedin/blob/master/images/package.JPG" alt="package.json" />
