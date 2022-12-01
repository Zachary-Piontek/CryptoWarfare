import React from 'react';
import { createRoot } from 'react-dom/client';
import './reset.css';
import './global.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AuthDisplay from './components/AuthDisplay.js';
import Header from './header.jsx';
import Footer from './footer.js';
import { UserProvider } from './context/userContext.js';
import Favorites from './pages/Favorites/index.jsx';
import Home from './pages/Home/index.jsx';

const container = document.getElementById('app') || document.createElement('div')
container.id = 'app'
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
    <UserProvider>
    <Header />
      <Routes>
          <Route path='/favorites' element={ <Favorites /> } />
          <Route path="/" element={ <Home /> } />
          <Route path="/auth" element={ <AuthDisplay /> } />
          <Route path="*" element={ <div>404</div> } />
      </Routes>
    <Footer />
    </UserProvider>
    </Router>
  </React.StrictMode>
);
