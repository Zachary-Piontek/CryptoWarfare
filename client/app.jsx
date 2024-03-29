import React from 'react';
import { createRoot } from 'react-dom/client';
import './reset.css';
import './global.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AuthDisplay from './components/AuthDisplay.js';
import Header from './header.jsx';
import { UserProvider } from './context/userContext.js';
import Favorites from './pages/Favorites/index.jsx';
import Home from './pages/Home/index.jsx';
import styles from './noinfo.module.css';
import Nfts from './pages/Nfts/index.jsx';
import Recon from './pages/Recon/index.jsx';
import Coin from './components/Coin/index.jsx';

const container = document.getElementById('app') || document.createElement('div')
container.id = 'app'
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
    <UserProvider>
    <Header />
      <Routes>
          <Route path='/recon' element={ <Recon /> } />
          <Route path='/nfts' element={ <Nfts /> } />
          <Route path='/favorites' element={ <Favorites /> } />
          <Route path="/auth" element={ <AuthDisplay /> } />
          <Route path='/coin' element={ <Coin /> } >
            <Route path=':coinId' element={ <Coin /> } />
          </Route>
          <Route path="/" element={ <Home /> } />
          <Route path="*" element={ <div className={styles.notThere}>404</div> } />
      </Routes>
    </UserProvider>
    </Router>
  </React.StrictMode>
);
